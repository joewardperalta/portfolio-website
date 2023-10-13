"use strict";

const formControl = document.querySelectorAll(
  "#contact-section form .form-control"
);

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
