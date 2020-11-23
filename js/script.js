// The "Name" field
    // "Name" field input is focused on page load
const nameInput = document.querySelector('#name');
nameInput.focus();

// "Job Role" section
    // "Other job role?" text field input is hidden by default on page load
const otherJobRoleInput = document.querySelector('#other-job-role');
otherJobRoleInput.hidden = true;

    // "Other job role?" text field appears when the 'Other' option is selected on the "Job Role" dropdown, hides otherwise.
const jobRoleDropdown = document.querySelector('#title');
jobRoleDropdown.addEventListener('change', e => {
    const option = e.target.value
    if(option === 'other'){
        otherJobRoleInput.hidden = false;
    } else {
        otherJobRoleInput.hidden = true;
    }
});

// "T-Shirt Info" section
const designDropdown = document.querySelector('#design');
const colorDropdown = document.querySelector('#color');

    // "Color" dropdown is disabled on page load.
colorDropdown.disabled = true;;

    // "Color" dropdown adjusts to user actions on "Design" dropdown
designDropdown.addEventListener('change', e => {
    const option = e.target.value;
    const colorOptions = colorDropdown.children;

        // "Color" dropdown is enabled once a "Design" dropdown option is selected
    colorDropdown.disabled = false;

        // "Color" dropdown adjust to one of the two options selected on "Design" dropdown:
            // Only "Color" options from the relevant "Design" theme are available for selection, others are hidden.
            // One of the available "Color" options is "pre-selected" on the "Color" dropdown

    for(let i=0; i<colorOptions.length; i++){
        const theme = colorOptions[i].getAttribute('data-theme');
        if (option === theme){
            colorOptions[i].hidden = false;
            colorOptions[i].setAttribute('selected', '');
        } else {
            colorOptions[i].hidden = true;
            colorOptions[i].removeAttribute('selected');
        }
    }
});

// "Register for Activities" section
const activitiesField = document.querySelector('#activities');
const activityCostShown = document.querySelector('#activities-cost');
let totalCost = 0;

    // the "Register for Activities" fieldset adjusts the "Total: $" element based on the the user's choice of activities
activitiesField.addEventListener('change', e => {
    const isChecked = e.target.checked;
    const activityCost = +e.target.getAttribute('data-cost');
    const activityDateAndTime = e.target.getAttribute('data-day-and-time');
    const otherCheckboxes = document.querySelectorAll(`#activities-box input:not([name=${e.target.getAttribute('name')}])`);

        // the 'toggleOtherCheckboxes' function
            // accepts a boolean as an argument
            // disables/enables other chekbox inputs with the same day and time attribute
    const toggleOtherCheckboxes = bool => {
        for(let i=0; i<otherCheckboxes.length;i++){
            if( activityDateAndTime === otherCheckboxes[i].getAttribute('data-day-and-time') ){
                otherCheckboxes[i].disabled = bool;
            }
        }
    }

        // on a checkbox click, the cost attribute is added to the 'totalCost' and checkboxes for activities on the same time and date are disabled
            // if a checkbox is unclicked, the cost is substracted from the total and previously disabled checkboxes are re-enabled
    if(isChecked){
        totalCost += activityCost;
        toggleOtherCheckboxes(true);
    } else {
        totalCost -= activityCost;
        toggleOtherCheckboxes(false);
    }

        // the 'totalCost' is injected into the page
    activityCostShown.innerHTML = `Total: $${totalCost}`;
});

// "Payment Info" section
const paymentDropdown = document.querySelector('#payment');
const creditCardOption = paymentDropdown.children[1];
const creditCardDiv = document.querySelector('#credit-card');
const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');


    // On page load, the default "Payment" option is credit card, on the dropdown, other payment method elements are hidden
creditCardOption.setAttribute('selected', '');
paypalDiv.hidden = true;
bitcoinDiv.hidden = true;

    // The page responds to the "Payment" dropdown, making selected elements visible and hidding the other options.
paymentDropdown.addEventListener('change', e => {
    const option = e.target.value;
    const paymentMethods = [
        creditCardDiv,
        paypalDiv,
        bitcoinDiv
    ];

    for(let i=0; i<paymentMethods.length; i++){
        if(option === paymentMethods[i].className){
            paymentMethods[i].hidden = false;
        } else {
            paymentMethods[i].hidden = true;
        }
    }
});

// Form validation
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const creditCardNumber = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

    // the 'nameValidator' helper function 
        // checks that the name field isn't blank or empty, or contain symbols or numbers
        // returns a boolean, 'nameIsValid'
const nameValidator = () => {
    const nameValue = nameInput.value;
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    return nameIsValid;
}

    // the 'emailValidator' helper function 
        // checks that the email is formatted like an email, with a non-@ symbol, followed by an @, followed by a domain name.
        // returns a boolean, 'emailIsValid'
const emailValidator = () => {
    const emailValue = emailInput.value;
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    return emailIsValid;
}

    // the 'activityValidator' helper function 
        // checks that at least one activity has been selected (i.e. totalCost > 0)
        // returns a boolean, 'activitySelectionIsValid'
const activityValidator = () => {
    const activitySelectionIsValid = totalCost > 0;
    return activitySelectionIsValid;
}

    // the 'creditCardValidator' helper function 
        // checks that the "Card number" isa number between 13 and 15 digits, no dashes or spaces
        // checks the "Zip code" is a 5-digit number
        // checks the "CVV" is a 3-digit number
        // returns a boolean, true when all three validation criteria are met, false otherwise
const creditCardValidator = () => {
    const ccNumValue = creditCardNumber.value;
    const ccNumIsValid = /^\d{13,16}$/.test(ccNumValue);
    const zipValue = zip.value;
    const zipIsValid = /^\d{5}$/.test(zipValue);
    const cvvValue = cvv.value;
    const cvvIsValid = /^\d{3}$/.test(cvvValue);
    return ccNumIsValid && zipIsValid && cvvIsValid;
}
    // on pressing the "Register" button, the form will get validated by calling the helper functions
        // 'nameValidator', 'emailValidator', and 'activityValidator' must all be true for the form to submit
        // if credit card is the selected payment method, then 'creditCardValidator' must also be true for the form to submit
        // console will log out messages whenever a helper function returns false
form.addEventListener('submit', e => {
    if( !nameValidator() ){
        e.preventDefault();
        console.log('name is evaluating to false');
    }
    
    if( !emailValidator() ){
        e.preventDefault();
        console.log('email is evaluating to false');
    }
      
    if( !activityValidator() ){
        e.preventDefault();
        console.log('language amount is lower than one');
    }

    if( !creditCardDiv.hidden && !creditCardValidator() ){
        e.preventDefault();
        console.log('issues with credit card values')
    }
});