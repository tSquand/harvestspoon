function getValue() {
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var email = document.getElementById("email");
    var date = document.getElementById("date");
    var guests = document.getElementById("guests");
    var notes = document.getElementById("notes");
    alert(name.value + number.value + email.value + date.value + guests.value + notes.value);
    
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];

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
    document.getElementById('dessertSection').style.display = 'none';
    document.getElementById('charcuterieSection').style.display = 'none';

    document.getElementById(section + 'Section').style.display = 'block';
}