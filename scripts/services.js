// Initialize services array
let services = JSON.parse(localStorage.getItem('services')) || [];

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

    // Check if services already exist in local storage
    let storedServices = JSON.parse(localStorage.getItem('services'));

    if (!storedServices || storedServices.length === 0) {
        // Create new 4 predefined services
        let service1 = { name: "Grooming", price: 50, description: "Bath and haircut" };
        let service2 = { name: "Vaccines", price: 30, description: "Annual vaccines" };
        let service3 = { name: "Nails", price: 10, description: "Nail trimming" };
        let service4 = { name: "Full", price: 100, description: "All services" };

        // Add the services to the array
        services = [service1, service2, service3, service4];

        // Save these services to local storage
        localStorage.setItem('services', JSON.stringify(services));
    } else {
        // Use the existing services from local storage
        services = storedServices;
    }

    // Display the services
    displayTable();
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
    
    // Save the updated array to local storage
    localStorage.setItem('services', JSON.stringify(services));
    
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
    displayTable();
}

// Clear form
function clearForm() {
    $('.needs-validation').removeClass('was-validated');
    $('#validationCustom01').val('');
    $('#validationCustom02').val('');
    $('#validationCustom03').val('');
}

// Display
function displayTable() {
    let $tableServices = $('#services');
    let $total = $('#total');
    let result = '';

    $.each(services, function (i, service) {
        result += `
            <tr id="${i}">
                <td scope="row">${i + 1}</td>
                <td>${service.name}</td>
                <td>$${service.price}</td>
                <td>${service.description}</td>
                <td><button class="btn btn-danger btn-sm delete-btn" data-index="${i}">Delete</button></td>
            </tr>
        `;
    });

    $tableServices.html(result);
    $total.text(services.length); // Display total number of services

    // Attach delete button handlers
    $('.delete-btn').on('click', function () {
        let index = $(this).data('index');
        deleteService(index);
    });
}

// Delete
function deleteService(index) {
    // Remove the service at the specified index
    services.splice(index, 1);

    // Update local storage with the modified array
    localStorage.setItem('services', JSON.stringify(services));
    
    // Refresh the table
    displayTable();

    // Display notification
    let $notification = $('#message-table');
    $notification.text('Service deleted successfully!')
    .css({
        display: 'block',
        color: 'red',
        fontSize: '1.2em',
        padding: '10px',
        border: '1px solid red',
        borderRadius: '5px'
    });
    
    // Hide the notification after a few seconds
    setTimeout(function () {
        $notification.hide();
    }, 2000);
}
