var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];
var viewMenuButton = document.getElementById("view-menu-button");
var menuBar = document.getElementById("menuBar");
var aboutUsSection = document.getElementById("about-us-section");
var backHomeButton = document.getElementById("back-home-button");
var footNote = document.getElementById("footNote");
var menuContainer = document.getElementById("menu-container");

viewMenuButton.onclick = function() {
    menuBar.style.display = "flex";
    menuContainer.style.display = "block";
    viewMenuButton.style.display = "none";
    aboutUsSection.style.display = "none";
    backHomeButton.style.display = "block";
    modalBtn.style.display = "block";
    footNote.style.display = "flex";
}

backHomeButton.onclick = function() {
    menuContainer.style.display = "none";
    menuBar.style.display = "none";
    viewMenuButton.style.display = "block";
    aboutUsSection.style.display = "block";
    backHomeButton.style.display = "none";
    modalBtn.style.display = "none";
    footNote.style.display = "none";
}


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

function displaySection(section) {
    document.getElementById(section + 'Section').style.display = 'block';  

    var buttons = document.getElementsByClassName('sectionButton');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    document.getElementById(section).classList.add('selected');
}

