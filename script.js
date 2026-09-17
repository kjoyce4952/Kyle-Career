const year = document.getElementById("year");
const menuButton = document.getElementById("menuButton");
const siteNav = document.getElementById("siteNav");
const copyEmail = document.getElementById("copyEmail");
const toast = document.getElementById("toast");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

copyEmail.addEventListener("click", async () => {
  const email = copyEmail.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = "Email copied";
  } catch {
    toast.textContent = email;
  }

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
});
