console.log('Hello to jQuery!');

// JS vs jQuery

document.getElementById('results');
$('#results');

document.getElementsByTagName('p');
$('p');

document.getElementsByClassName('with-border');
$('.with-border');

// ID SELECTORS
let redParagraph = $('#red').css("background", "red").css("color", "white");
console.log("My red paragraph is: ", redParagraph);

let blueParagraph = $('#blue').css("background", "blue").css("color", "white");
console.log("My blue paragraph is: ", blueParagraph);

// CLASS SELECTORS
let myParagraphWithBorder = $('.with-border');
myParagraphWithBorder.css("border", "5px dashed yellow");

myParagraphWithBorder.click(function() {
    // We can use mousehover instead of click
    console.log("Cliked")
    $(this).addClass('bg-gray');
});

// TAG SELECTORS
let paragraphs = $('p');

paragraphs.css("cursor", "pointer");

// SIMPLE AND COMMON FUNCTION
function register() {
    let testEntry = $('#testInput').val();
    $('#results').append(`<li>${testEntry}</li>`);
}

// EVENTS
$('#registerBtn').on('click', register);

// SIMPLE AND COMMON FUNCTION
function clickMe() {
    console.log("Click me");

    $('p:first').hide();
    $('p:last').css("border", "3px solid black");
}

$('#newBtn').on('click', clickMe);

// CHALLENGE: Hide and show username (with animation)
function hideUsername() {
    // $('#user-name').hide();
    $('#user-name').slideUp(1000);
}

$('#hide-username').on('click', hideUsername);

function showUsername() {
    // $('#user-name').show();
    $('#user-name').slideDown(1000);
}

$('#show-username').on('click', showUsername);
