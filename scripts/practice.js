var globalVarible = "I am in global scope";

function myFunction() {
    var localVariable = "I am in local scope";
    console.log(globalVarible);
    console.log(localVariable);

    if (true) {
        let blockVariable = "I am in block scope";
        console.log(blockVariable);
    }
}

myFunction();
