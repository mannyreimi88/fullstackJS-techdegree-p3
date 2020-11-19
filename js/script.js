// The "Name" field
    // "Name" field input is focused on page load
const nameInput = document.querySelector('#name');
nameInput.focus();

// "Job Role" section
    // "Other job role?" text field input is hidden by default on page load
const otherJobRoleInput = document.querySelector('#other-job-role');
otherJobRoleInput.style.display = 'none';

    // "Other job role?" text field appears when the 'Other' option is selected on the "Job Role" dropdown, hides otherwise.
const jobRoleDropdown = document.querySelector('#title');
jobRoleDropdown.addEventListener('change', e => {
    const option = e.target.value
    if(option === 'other'){
        otherJobRoleInput.style.display = 'inherit';
    } else {
        otherJobRoleInput.style.display = 'none';
    }
});

// "T-Shirt Info" section
    // "Color" dropdown is disabled on page load.
const colorDropdown = document.querySelector('#color');
colorDropdown.disabled = true;