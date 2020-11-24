# fullstackJS-techdegree-p3
My third Techdegree — Full Stack JavaScript project

A form validation script with the following functionality:

- auto-focusing on 'Name' field on page load.
- adds dynamic hide/show behaviour to 'Other job role?' field on 'Job Role' dropdown.
- adds dynamic enable/disable and hides irrelvant options on 'Color' dropdown based on user choice of 'Design' on 'T-Shirt Info' section.
- dynamically calculates the total cost of selected activities on 'Register for Activities' section and displays it on page.
- dynamically changes elements on page based on selection of 'Payment Info' and sets the default payment to credit card.
- on form submit, adds formatting validation to the 'Name' and 'Email' fields, makes sure at least one 'Activity' is selected, and validates the format of credit card inputs if that's the selected payment method.
- dynamically adds accessibility features, like focus on selected activites, and error messages and icons on validated form fields.

The following functionality has been added for **extra credit**:
- **forbidding the selection of simultanously-ocurring activities** on the 'Register for Activities' section.
- **real-time validation of the 'Email' input field** as the user keys his input in.
- **conditional error messages on the 'Name' input field**, as follows:
    - if the field is blank or has whitespace: "Name field cannot be blank".
    - if the field contains numbers or symbols: "Name field cannot have symbols or numbers".