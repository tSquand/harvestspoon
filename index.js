function getValue() {
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var email = document.getElementById("email");
    var date = document.getElementById("date");
    var guests = document.getElementById("guests");
    var notes = document.getElementById("notes");
    alert(name.value + number.value + email.value + date.value + guests.value + notes.value);
    
}