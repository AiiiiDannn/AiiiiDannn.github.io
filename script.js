document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.getElementById("contactForm");
  const modal = document.getElementById("thankYouModal");
  const closeBtn = document.getElementById("closeModal");
  const subjectInput = document.getElementById("subjectInput");
  const realSubject = document.getElementById("realSubject");

  form.addEventListener("submit", function (e) {
    // Set the hidden _subject to the value from the visible subject
    realSubject.value = subjectInput.value;

    // Delay showing modal after formSubmit trigger
    setTimeout(() => {
      modal.style.display = "block";
    }, 100);
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    form.reset(); // Clear form
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  });
});
