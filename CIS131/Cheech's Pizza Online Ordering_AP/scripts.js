//Austin Phillips, 23/FA-CIS-131-W01, 9/27/23, "Cheech's Pizza Online Ordering", scripts.js

//Function to generate the pizza type options in the selection list
function populatePizzaTypes() {
    var pizzaTypes = ["Margherita", "Pepperoni", "Vegetarian", "BBQ Chicken", "Hawaiian"];
    var pizzaSelect = document.createElement("select");
    pizzaSelect.name = "pizzaType";
    for (var i = 0; i < pizzaTypes.length; i++) {
        var option = document.createElement("option");
        option.value = pizzaTypes[i];
        option.text = pizzaTypes[i];
        pizzaSelect.appendChild(option);
    }
    document.body.appendChild(pizzaSelect);
}

//Function to create the pizza selection form
function createPizzaOrderForm() {
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.placeholder = "Enter your name";
    document.body.appendChild(nameInput);

    var phoneInput = document.createElement("input");
    phoneInput.type = "text";
    phoneInput.name = "phone";
    phoneInput.placeholder = "Enter your phone number (XXX-XXX-XXXX)";
    document.body.appendChild(phoneInput);

    //Call function to populate pizza type options
    populatePizzaTypes();

    //Create a selection box for pizza quantity
    var pizzaQuantitySelect = document.createElement("select");
    pizzaQuantitySelect.name = "pizzaQuantity";
    for (var i = 1; i <= 10; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        pizzaQuantitySelect.appendChild(option);
    }
    document.body.appendChild(pizzaQuantitySelect);

    //Create an "Order" button and add event listener for validation
    var orderButton = document.createElement("button");
    orderButton.innerHTML = "Order";
    orderButton.addEventListener("click", validateOrder);
    document.body.appendChild(orderButton);
}

//Function for order validation
function validateOrder() {
    var name = document.getElementsByName('name')[0].value;
    var phone = document.getElementsByName('phone')[0].value;
    var pizzaType = document.getElementsByName('pizzaType')[0].value;
    var pizzaQuantity = parseInt(document.getElementsByName('pizzaQuantity')[0].value, 10);

    var nameIsValid = name.length >= 6;
    var phoneIsValid = /^(\d{3}-\d{3}-\d{4})$/.test(phone);

    //Reset previous errors
    resetErrors();

    //Check validation
    if (!nameIsValid) {
        highlightField('name');
        alert('Please enter a valid name (minimum 6 characters).');
        return;
    }

    if (!phoneIsValid) {
        highlightField('phone');
        alert('Please enter a valid phone number in the format XXX-XXX-XXXX.');
        return;
    }

    //Order summary calculation
    var subtotal = pizzaQuantity * 9.49;
    var tax = subtotal * 0.076;
    var total = subtotal + tax;

    //Display the order summary
    displayOrderSummary(name, phone, pizzaType, pizzaQuantity, subtotal, tax, total);
}

//Function to highlight error field in red
function highlightField(fieldName) {
    var field = document.getElementsByName(fieldName)[0];
    field.style.backgroundColor = 'red';
}

//Resets all field colors
function resetErrors() {
    var fields = document.getElementsByTagName('input');
    for (var i = 0; i < fields.length; i++) {
        fields[i].style.backgroundColor = '';
    }
}

//Function to display order summary
function displayOrderSummary(name, phone, pizzaType, pizzaQuantity, subtotal, tax, total) {
    var orderSummaryDiv = document.getElementById('orderSummary');
    orderSummaryDiv.innerHTML = `
      <p>Name: ${name}</p>
      <p>Phone: ${phone}</p>
      <p>Pizza Type: ${pizzaType}</p>
      <p>Quantity: ${pizzaQuantity}</p>
      <p>Subtotal: $${subtotal.toFixed(2)}</p>
      <p>Tax (7.6%): $${tax.toFixed(2)}</p>
      <p>Total: $${total.toFixed(2)}</p>
    `;
}