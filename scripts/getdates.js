document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");

    const today = new Date();
    yearSpan.textContent = today.getFullYear();

    lastModified.textContent = `Last Modification: ${document.lastModified}`;
});
  