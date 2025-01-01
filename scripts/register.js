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

// Pet class
class Pet {
    // Constructor
    constructor (name, age, gender, breed, service) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
    }
}

// Create the variables
let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let inputGender = document.getElementById("gender");
let inputBreed = document.getElementById("breed");
let inputService = document.getElementById("services");

function register() {
    // Create new pet
    let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    pets.push(thePet);
    console.log(pets);
    // clearForm();
}

function clearForm() {
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
}

document.addEventListener("DOMContentLoaded", function() {
    // Create new pets
    let pet1 = new Pet("Scooby", 60, "Male", "Dane", "grooming");
    let pet2 = new Pet("Scrappy", 20, "Male", "Mixed", "vaccines");
    let pet3 = new Pet("Velma", 40, "Female", "Canarian", "nails");
    pets = [pet1, pet2, pet3];
    
    console.log(pets);
});