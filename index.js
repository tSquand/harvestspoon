var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];
var viewMenuButton = document.getElementById("view-menu-button");
var menuBar = document.getElementById("menuBar");
var aboutUsSection = document.getElementById("about-us-section");
var backHomeButton = document.getElementById("back-home-button");
var canapesSection = document.getElementById("canapesSection");
var footNote = document.getElementById("footNote");


viewMenuButton.onclick = function() {
    menuBar.style.display = "flex";
    viewMenuButton.style.display = "none";
    aboutUsSection.style.display = "none";
    backHomeButton.style.display = "block";
    canapesSection.style.display = "block";
    modalBtn.style.display = "block";
    document.getElementById('canapes').classList.add('selected');
    footNote.style.display = "flex";
}

backHomeButton.onclick = function() {
    menuBar.style.display = "none";
    viewMenuButton.style.display = "block";
    aboutUsSection.style.display = "block";
    backHomeButton.style.display = "none";
    canapesSection.style.display = "none";
    charcuterieSection.style.display = "none";
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
    document.getElementById('canapesSection').style.display = 'none';
    document.getElementById('charcuterieSection').style.display = 'none';
    document.getElementById(section + 'Section').style.display = 'block';  

    var buttons = document.getElementsByClassName('sectionButton');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    document.getElementById(section).classList.add('selected');
}

