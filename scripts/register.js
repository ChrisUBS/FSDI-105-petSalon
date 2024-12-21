let pets = []; // Empty array to store pets

// Object literal
let petSalon = {
    name: "The Fashion Pet",
    address: {
        street: "Palm Ave",
        zip:"22333"
    },
    phone:"666-555-7777"
}

// Change console.log to document.write later
console.log(petSalon);

// Creating the pets
let pet1 = {
    name: "Scooby",
    age: 60,
    gender: "Male",
    breed: "Dane",
    service: "Grooming"
}

let pet2 = {
    name: "Scrappy",
    age: 50,
    gender: "Male",
    breed: "Mixed",
    service: "Vaccines"
}

let pet3 = {
    name: "Velma",
    age: 40,
    gender: "Female",
    breed: "Canarian",
    service: "Nails"
}

pets.push(pet1, pet2, pet3);
console.log(pets);

function displayNames() {
    let petsList = document.getElementById("petsList");
    petsList.innerHTML = `We have ${pets.length} pets in the salon`;

    for (let i = 0; i < pets.length; i++) {
        petsList.innerHTML += `<p>${pets[i].name}</p>`;
    }
}

displayNames();