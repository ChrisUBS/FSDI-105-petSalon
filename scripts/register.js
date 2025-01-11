// Initialize services array
let services = JSON.parse(localStorage.getItem('services')) || [];

// Variables
let pets = []; // Empty array to store pets
let totalPets = 0; // Total pets registered
let typeDisplay = "table";

// When the page is loaded
document.addEventListener("DOMContentLoaded", function() {

    // Add options to the select element
    let select = document.getElementById("services");
    for (let i = 0; i < services.length; i++) {
        let option = document.createElement("option");
        option.text = services[i].name + " - $" + services[i].price;
        select.add(option);
    }
    
    // Add functionality to the buttons
    document.getElementById("table-btn").addEventListener("click", function() {
        changeDisplay("table");
        displayRow();
    });

    document.getElementById("cards-btn").addEventListener("click", function() {
        changeDisplay("cards");
        displayCards();
    });

    // Create new 3 pets
    let pet1 = new Pet("Scooby", 60, "Male", "Dane", "Dog", "grooming - $50", "cash");
    let pet2 = new Pet("Scrappy", 20, "Male", "Mixed", "Dog", "vaccines - $30", "credit");
    let pet3 = new Pet("Velma", 10, "Female", "Canarian", "Bird", "nails - $10", "paypal");
    pets = [pet1, pet2, pet3];
    
    // Display the pets and hide the message
    displayRow();
    $('#message-register').hide();
});

function getServices() {
    console.log("Getting services...");

    let services = read();
    let option = "";

    for (let i = 0; i < services.length; i++) {
        option += `<option value="${services[i].name}">${services[i].name} - $ ${services[i].price}</option>`;
    }

    $('#services').html(option);
}

// Stop form submission
const form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    register();
});

// Pet class
class Pet {
    // Constructor
    constructor (name, age, gender, breed, type, service, paymentMethod) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.type = type;
        this.service = service;
        this.paymentMethod = paymentMethod;
    }
}

// Create the variables for the form inputs
let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let inputGender = document.getElementById("gender");
let inputBreed = document.getElementById("breed");
let inputType = document.getElementById("type");
let inputService = document.getElementById("services");
let inputPaymentMethod = document.getElementById("payment-method");

// Change the display type
function changeDisplay(displayType) {
    typeDisplay = displayType;
}

// Register function
function register() {

    if(inputName.value === "" || inputAge.value === "" || inputGender.value === "" || inputBreed.value === "" || inputType.value === "" || inputService.value === "" || inputPaymentMethod.value === "") {
        // alert("Please complete the form");
        return;
    }

    // Create new pet
    let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputType.value, inputService.value, inputPaymentMethod.value);
    pets.push(thePet);

    // Clear form
    clearForm();

    // Display the pets
    if (typeDisplay === "table") {
        displayRow();
    }

    if (typeDisplay === "cards") {
        displayCards();
    }

    // Display notification
    let notification = $('#message-register');
    notification.text("Pet registered successfully!")
        .css({
            display: 'block',
            textAlign: 'center',
            color: 'green',
            fontSize: '1.2em',
            padding: '10px',
            border: '1px solid green',
            borderRadius: '5px',
            margin: '20px auto auto auto'
        });

    // Hide the notification after a few seconds
    setTimeout(function () {
        notification.hide();
    }, 2000);
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
    if (typeDisplay === "table") {
        displayRow();
    }

    if (typeDisplay === "cards") {
        displayCards();
    }

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
