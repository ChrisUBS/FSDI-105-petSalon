// Variables
let pets = []; // Empty array to store pets
let totalPets = 0; // Total pets registered

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

// Create the variables for the form inputs
let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let inputGender = document.getElementById("gender");
let inputBreed = document.getElementById("breed");
let inputService = document.getElementById("services");

// Register function
function register() {

    if(inputName.value === "" || inputAge.value === "" || inputGender.value === "" || inputBreed.value === "" || inputService.value === "") {
        // alert("Please complete the form");
        return;
    }

    // Create new pet
    let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    pets.push(thePet);

    // Clear form and display pets
    clearForm();
    display();
}

// Clear form function
function clearForm() {
    inputName.value = "";
    inputAge.value = "";
    inputBreed.value = "";
}

// Function to display pets
function display() {
    let tbody = document.getElementById("pets-table");
    let total = document.getElementById("total-pets");
    let row = "";
    totalPets = 0;
    for (let i = 0; i < pets.length; i++) {
        row += `<tr>
                    <td>${i + 1}</td>
                    <td>${pets[i].name}</td>
                    <td>${pets[i].age}</td>
                    <td>${pets[i].gender}</td>
                    <td>${pets[i].breed}</td>
                    <td>${pets[i].service}</td>
                </tr>`;
        totalPets++;
    }
    total.innerHTML = `<strong>Total Pets: ${totalPets}</strong>`;
    tbody.innerHTML = row;
}

// Function to calculate the average age of the pets
function averageAge() {
    let sum = 0;
    for (let i = 0; i < pets.length; i++) {
        sum += parseInt(pets[i].age);
    }
    let average = sum / pets.length;
    return average;
}

// When the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create new 3 pets
    let pet1 = new Pet("Scooby", 60, "Male", "Dane", "grooming");
    let pet2 = new Pet("Scrappy", 20, "Male", "Mixed", "vaccines");
    let pet3 = new Pet("Velma", 40, "Female", "Canarian", "nails");
    pets = [pet1, pet2, pet3];
    
    // Display pets
    display();
});

// Stop form submission
const form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    register();
});
