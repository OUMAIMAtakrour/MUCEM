// const usernameInput = document.getElementById('username').value;
// const cinInput = document.getElementById('cin').value;
// const emailInput = document.getElementById('email').value;
// const contactInput = document.getElementById('contact').value;
// const error = document.querySelector(".error");

// const checkButton = document.getElementById('checkButton');


// checkButton.addEventListener('click', check);

// function check(e) {
//     e.preventDefault();
//     if (usernameInput === '') {
//         // error.classList.add("active");
//         error.style.display= "block";

//     } 
//     if (cinInput === '') {
//         // error.classList.add("active");
//         error.style.display= "block";
//     } 
//     if (emailInput === '') {
//         // error.classList.add("active");
//         error.style.display= "block";
//     } 
//     if (contactInput === '') {
//         // error.classList.add("active");
//         error.style.display= "block";
//     } 
   
// }
const usernameInput = document.getElementById('username');
const cinInput = document.getElementById('cin');
const emailInput = document.getElementById('email');
const contactInput = document.getElementById('contact');
const errorUsername = document.querySelector(".error-username");
const errorCin = document.querySelector(".error-cin");
const errorEmail = document.querySelector(".error-email");
const errorContact = document.querySelector(".error-contact");

const checkButton = document.getElementById('checkButton');

checkButton.addEventListener('click', check);

function check(e) {
    e.preventDefault();

    // Reset error messages
    errorUsername.style.display = "none";
    errorCin.style.display = "none";
    errorEmail.style.display = "none";
    errorContact.style.display = "none";

    if (usernameInput.value === '') {
        errorUsername.style.display = "block";
    }

    if (cinInput.value === '') {
        errorCin.style.display = "block";
    }

    if (emailInput.value === '') {
        errorEmail.style.display = "block";
    }

    if (contactInput.value === '') {
        errorContact.style.display = "block";
    }
}
