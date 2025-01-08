// Variable
let services = [];

// When document is ready
$(document).ready(function () {
    // Validate form
    $('#btn-form').on('click', function () {
        var form = document.querySelector('.needs-validation');

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
        } else {
            register();
        }
    });
});

// Class Service
class Service {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

// Register
function register() {
    // Create a new service
    let theService = new Service($('#validationCustom01').val(), $('#validationCustom02').val(), $('#validationCustom03').val());

    // Add the new service to the array
    services.push(theService);

    // Clear the form
    clearForm();

    // Display notification
    let notification = $('#message');
    notification.text("Service registered successfully!")
        .css({
            display: 'block',
            textAlign: 'center',
            color: 'green',
            fontSize: '1.2em',
            padding: '10px',
            border: '1px solid green',
            borderRadius: '5px'
        });

    // Hide the notification after a few seconds
    setTimeout(function () {
        notification.hide();
    }, 2000);

    // Display the services
    console.log(services);
}

// Clear form
function clearForm() {
    $('.needs-validation').removeClass('was-validated');
    $('#validationCustom01').val('');
    $('#validationCustom02').val('');
    $('#validationCustom03').val('');
}
