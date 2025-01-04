// Variables
let pets = []; // Empty array to store pets
let totalPets = 0; // Total pets registered

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

function displayPets() {
    let cardsSection = document.getElementById("pets");
    let result = "";
    
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];

        result += `
            <div id="${i}" class="card col-3 mx-2">
                <div class="card-body">    
                    <h5 class="card-title>${pet.name} - <span class="text-secondary"> ${pet.service}</span></h5>
                    <h6 class="card-subittle mb-2 text-body-secondary">${pet.breed}</h6>
                    <p class="card-text">${pet.gender}, ${pet.age}</p>
                    <button class="btn btn-danger bt-sm" onclick="deletePet(${i})">Delete</button>    
                </div>
            </div>
        `;
    }

    cardsSection.innerHTML = result;
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
    displayPets();
});

// Stop form submission
const form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    register();
});
