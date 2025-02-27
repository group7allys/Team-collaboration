document.addEventListener("DOMContentLoaded", loadProfiles);

function registerUser() {
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let location = document.getElementById("location").value.trim();

    if (name === "" || age === "" || location === "") {
        alert("Please fill all fields!");
        return;
    }

    let user = { name, age, gender, location };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("location").value = "";
    loadProfiles();
}

function loadProfiles() {
    let profilesTable = document.getElementById("profiles");
    profilesTable.innerHTML = "";

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.forEach(user => {
        let row = profilesTable.insertRow();
        row.insertCell(0).innerText = user.name;
        row.insertCell(1).innerText = user.age;
        row.insertCell(2).innerText = user.gender;
        row.insertCell(3).innerText = user.location;
    });
}

function findMatches() {
    let selectedGender = document.getElementById("matchGender").value;
    let matchedProfilesTable = document.getElementById("matchedProfiles");
    matchedProfilesTable.innerHTML = "";

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let matchedUsers = users.filter(user => user.gender === selectedGender);

    matchedUsers.forEach(user => {
        let row = matchedProfilesTable.insertRow();
        row.insertCell(0).innerText = user.name;
        row.insertCell(1).innerText = user.age;
        row.insertCell(2).innerText = user.gender;
        row.insertCell(3).innerText = user.location;
    });

    if (matchedUsers.length === 0) {
        alert("No matching profiles found!");
    }
}