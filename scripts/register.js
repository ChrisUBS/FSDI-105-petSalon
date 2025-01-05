// Variables
let pets = []; // Empty array to store pets
let totalPets = 0; // Total pets registered

// Pet class
class Pet {
    // Constructor
    constructor (name, age, gender, breed, type, service) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.type = type;
        this.service = service;
    }
}

// Create the variables for the form inputs
let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let inputGender = document.getElementById("gender");
let inputBreed = document.getElementById("breed");
let inputType = document.getElementById("type");
let inputService = document.getElementById("services");

// Register function
function register() {

    if(inputName.value === "" || inputAge.value === "" || inputGender.value === "" || inputBreed.value === "" || inputType.value === "" || inputService.value === "") {
        // alert("Please complete the form");
        return;
    }

    // Create new pet
    let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputType.value, inputService.value);
    pets.push(thePet);

    // Clear form and display pets
    // clearForm();
    displayRow();
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

function displayRow() {
    let cardsSection = document.getElementById("pets");
    let result = "";
    
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];

        // result += `
        //     <tr id="${i}">
        //         <td scope="row">${i + 1}</td>
        //         <td>${pet.name}</td>
        //         <td>${pet.age}</td>
        //         <td>${pet.gender}</td>
        //         <td>${pet.breed}</td>
        //         <td>${pet.type}</td>
        //         <td>${pet.service}</td>
        //         <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>
        //     </tr>
        // `;

        result += `
            <div id="${i}" class="card col-12 col-sm-6 col-md-4 col-lg-2 mx-2 mb-2 text-center fixed-card">
                <div class="card-body">    
                    <h5 class="card-title">${pet.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${pet.service}</h6>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}, ${pet.type}</h6>
                    <p class="card-text">${pet.gender}, ${pet.age}</p>
                    <button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button>    
                </div>
            </div>
        `;

    }
    
    displayInfo();
    cardsSection.innerHTML = result;
}

function displayInfo() {
    let totalPets = document.getElementById("total");
    let dogCounter = document.getElementById("dTotal");
    let catCounter = document.getElementById("cTotal");
    let birdCounter = document.getElementById("bTotal");

    let dog = 0;
    let cat = 0;
    let bird = 0;

    totalPets.innerHTML = pets.length;
    console.log("total: ", pets.length);

    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        console.log("pet(", i,"): ", pet);

        if (pet.type === "Dog") {
            dog++;
        }

        if (pet.type === "Cat") {
            cat++;
        }

        if (pet.type === "Bird") {
            bird++;
        }
    }

    dogCounter.innerHTML = dog;
    catCounter.innerHTML = cat;
    birdCounter.innerHTML = bird;
}

function deletePet(index) {
    // pets.splice(index, 1);
    // displayRow();

    document.getElementById(index).remove();
    pets.splice(index, 1);

    displayRow();
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
    let pet1 = new Pet("Scooby", 60, "Male", "Dane", "Dog", "grooming");
    let pet2 = new Pet("Scrappy", 20, "Male", "Mixed", "Dog", "vaccines");
    let pet3 = new Pet("Velma", 40, "Female", "Canarian", "Cat", "nails");
    pets = [pet1, pet2, pet3];
    
    // Display the pets
    displayRow();
});

// Stop form submission
const form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    register();
});
