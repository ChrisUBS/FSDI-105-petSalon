// Variables
let pets = []; // Empty array to store pets
let totalPets = 0; // Total pets registered

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
    clearForm();
    displayRow();
}

// Clear form function
function clearForm() {
    inputName.value = "";
    inputAge.value = "";
    inputBreed.value = "";
}

function deletePet(index) {
    document.getElementById(index).remove();
    pets.splice(index, 1);

    // Refresh the table
    displayRow();

    // Display notification
    let notification = document.getElementById("message");
    notification.innerHTML = "Pet deleted successfully!";
    notification.style = "display: block; color: red; font-size: 1.2em; padding: 10px; border: 1px solid red; border-radius: 5px;";

    // Hide the notification after a few seconds
    setTimeout(() => {
        notification.style.display = "none";
    }, 2000); // 2000 ms = 2 seconds
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
