// PORTFOLIO SETTINGS: replace the example values below before publishing.
const PROFILE = {
  github: "", // Example: https://github.com/your-username
  linkedin: "", // Example: https://www.linkedin.com/in/your-profile/
  email: "" // Example: hello@example.com
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const nav = document.getElementById("site-nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

for (const link of document.querySelectorAll("[data-config-link]")) {
  const type = link.dataset.configLink;
  const target = type === "email" && PROFILE.email ? `mailto:${PROFILE.email}` : PROFILE[type];
  if (target) {
    link.href = target;
    if (type !== "email") { link.target = "_blank"; link.rel = "noopener noreferrer"; }
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("contact-note").textContent = `The ${type} link is not set up yet. Add it to PROFILE in script.js.`;
    });
  }
}
if (Object.values(PROFILE).every(Boolean)) document.getElementById("contact-note").textContent = "Thanks for visiting!";
