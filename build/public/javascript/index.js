"use strict";

const projectList = document.querySelector("#project-list");
const formControl = document.querySelectorAll("#contact-section form .form-control");


// Change form control class in contact section to active when focused
[...formControl].map((e) => {
  e.addEventListener("focus", () => {
    const activeFormControl = document.querySelector(
      "#contact-section form .form-control.active"
    );

    if (activeFormControl != e) {
      e.classList.add("active");
      activeFormControl.classList.remove("active");
    }
  });
});


// This function will populate the featured projects section of the home page
async function populateFeaturedProjects() {

  // Fetch the projects' api
  const res = await fetch("/api/projects");
  let projects = res.json();

  // Populate the project list with featured projects
  projects
  .then(data => {
    data.map(project => {

      if (project.featured) {
        // Create a col element
        const col = document.createElement("div"); 
        col.classList.add("col-12");
        col.classList.add("col-md-4")

        // Create a card element
        const card = document.createElement("div"); 
        card.classList.add("card");

        // Create a card-body element
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Create a card-title element
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");

        // Create a card-text element
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");

        // Create an anchor tag element
        const link = document.createElement("a");

        // Create img element
        const img = document.createElement("img");

        // Create font awesome link icon
        const fontAwesomeLink = document.createElement("i");
        fontAwesomeLink.classList.add("fa-solid");
        fontAwesomeLink.classList.add("fa-link")

        col.append(card);
        card.append(img);
        card.append(cardBody);

        link.setAttribute("href", project.link);
        link.setAttribute("target", "_blank");
        link.textContent = project.title + " ";
        link.append(fontAwesomeLink);

        cardBody.append(cardTitle);
        cardBody.append(cardText);

        cardTitle.append(link);
        cardText.textContent = project.description;
        img.setAttribute("src", project.img);

        projectList.append(col)
      }
    })
  })
  .catch(err => console.log(err));
}
populateFeaturedProjects()

