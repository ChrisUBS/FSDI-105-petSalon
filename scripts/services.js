// Constructor 
class Services {
    constructor() {
    }
}

// Register
function register() {
    console.log("A services was added");
}

// Display
function display() {}

// Init
function init() {
    $('#registerBtn').on('click', register);
}
window.onload = init;