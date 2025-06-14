/* ─── footer dates ─────────────────────────────── */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

/* ─── hamburger toggle (≤ 700 px) ─────────────── */
const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav.navigation");
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
    menuBtn.textContent = nav.classList.contains("open") ? "❌" : "☰";
});

/* ─── temple data (7 originals + 3 new) ───────── */
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    /* –––– three additional –––– */
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19760,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52826,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-exterior-hdr-1497361.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-temple-lds-2213061-wallpaper.jpg"
    }
];

/* ─── card builder ─────────────────────────────── */
function buildCard(t) {
    const card = document.createElement("div");
    card.className = "temple-card";
    card.innerHTML = `
    <h3>${t.templeName}</h3>
    <p><span class="label">Location:</span>${t.location}</p>
    <p><span class="label">Dedicated:</span>${t.dedicated}</p>
    <p><span class="label">Size:</span>${t.area.toLocaleString()} sq ft</p>
    <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
  `;
    return card;
}

/* ─── render + filter utilities ────────────────── */
const gallery = document.querySelector(".gallery");
const navLinks = document.querySelectorAll("nav.navigation a");
const viewTitle = document.querySelector("main h2");

function displayTemples(list) {
    gallery.innerHTML = "";
    list.forEach(t => gallery.appendChild(buildCard(t)));
}

function getYear(str) {
    // parses "2005, August, 7"  → 2005
    return parseInt(str.split(",")[0], 10);
}

function filterTemples(type) {
    let filtered;
    switch (type) {
        case "old": filtered = temples.filter(t => getYear(t.dedicated) < 1900); break;
        case "new": filtered = temples.filter(t => getYear(t.dedicated) > 2000); break;
        case "large": filtered = temples.filter(t => t.area > 90000); break;
        case "small": filtered = temples.filter(t => t.area < 10000); break;
        default: filtered = temples; break;
    }
    viewTitle.textContent = type === "home" ? "Home" : type.charAt(0).toUpperCase() + type.slice(1);
    displayTemples(filtered);

    
    navLinks.forEach(a => a.classList.toggle("active", a.dataset.filter === type));
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", false);
}

navLinks.forEach(a =>
    a.addEventListener("click", e => {
        e.preventDefault();
        filterTemples(a.dataset.filter);
    })
);

filterTemples("home");
