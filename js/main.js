/**
 * Created by Matthew Sklar on 4/14/2016.
 */

/**
 * Start the thermometer timer
 */
function start() {
    var mercury = document.getElementById("mercury");

    mercury.classList.remove("animateThermometer");
    mercury.offsetWidth = mercury.offsetWidth;          // For some reason it doesn't work without this
    mercury.classList.add("animateThermometer");
}