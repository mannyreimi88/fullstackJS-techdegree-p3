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