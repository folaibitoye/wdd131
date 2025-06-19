/* -------------------------------------------------
 *  localStorage counter – increments every time
 *  review.html is successfully loaded
 * ------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
    const key = "reviewCount";
    let count = Number(localStorage.getItem(key)) || 0;
    count += 1;                           // add one for this visit
    localStorage.setItem(key, count);     // save back
    /* show the running total */
    document.getElementById("counter").textContent =
        `You have submitted ${count} review${count === 1 ? "" : "s"} so far.`;
});
  