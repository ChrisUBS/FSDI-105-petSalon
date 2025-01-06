// Function to display pets
function displayRow() {
    let cardsSection = document.getElementById("pets");
    let result = "";
    
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];

        result += `
            <tr id="${i}">
                <td scope="row">${i + 1}</td>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.type}</td>
                <td>${pet.service}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>
            </tr>
        `;

        // result += `
        //     <div id="${i}" class="card col-12 col-sm-6 col-md-4 col-lg-2 mx-2 mb-2 text-center fixed-card">
        //         <div class="card-body">    
        //             <h5 class="card-title">${pet.name}</h5>
        //             <h6 class="card-subtitle mb-2 text-body-secondary">${pet.service}</h6>
        //             <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}, ${pet.type}</h6>
        //             <p class="card-text">${pet.gender}, ${pet.age}</p>
        //             <button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button>    
        //         </div>
        //     </div>
        // `;

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