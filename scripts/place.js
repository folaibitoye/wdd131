document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values
const temp = 10;
const windSpeed = 5;

document.getElementById("temp").textContent = temp;
document.getElementById("wind").textContent = windSpeed;

function calculateWindChill(tempC, windKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(windKmh, 0.16) +
        0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
}

let windChill = "N/A";
if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed);
}

document.getElementById("chill").textContent = windChill;

