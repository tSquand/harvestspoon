function getValue() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var guests = document.getElementById("guests").value;
    var notes = document.getElementById("notes").value;
    alert(firstName + lastName + number + email + date + guests + notes);
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];
var viewMenuButton = document.getElementById("view-menu-button");
var menuBar = document.getElementById("menuBar");
var aboutUsSection = document.getElementById("about-us-section");
var backHomeButton = document.getElementById("back-home-button");
var canapesSection = document.getElementById("canapesSection");

viewMenuButton.onclick = function() {
    menuBar.style.display = "flex";
    viewMenuButton.style.display = "none";
    aboutUsSection.style.display = "none";
    backHomeButton.style.display = "block";
    canapesSection.style.display = "block";
    document.getElementById('canapes').classList.add('selected');
}

backHomeButton.onclick = function() {
    menuBar.style.display = "none";
    viewMenuButton.style.display = "block";
    aboutUsSection.style.display = "block";
    backHomeButton.style.display = "none";
    canapesSection.style.display = "none";
    charcuterieSection.style.display = "none";
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

