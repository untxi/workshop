function createMap() {
    window.open("https://www.google.com/maps/d/u/0/?hl=es-419");
}

function showMap() {
    if (document.getElementById("demo").style.display === "none") {
        document.getElementById("demo").style.display = "block";
    } else {
        document.getElementById("demo").style.display = "none";
    }
}