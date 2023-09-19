//Austin Phillips, 23/FA-CIS-131-W01, 9/18/23, Exam 1

//This creates the "aryToDoItems" array
const aryToDoItems = ['study', 'nap', 'eat dinner'];

//Event listener for window load
window.addEventListener('load', function () {
    createList();
});

//Set up an event listener for the "Add Task" button
document.getElementById('addTask').addEventListener('click', function () {
    //Retrieve the value from the hiddenText input field
    const hiddenTextValue = document.getElementById('hiddenText').value;

    //Retrieve the value from the task input field
    const taskValue = document.getElementById('task').value;

    //Call the displayStatus function to handle the display based on the input values
    displayStatus(hiddenTextValue, taskValue);
});


//Function to create the list using "aryToDoItems"
function createList() {
    const ul = document.getElementById('list');

    //Loop through "aryToDoItems" and invoke createElement for each element
    aryToDoItems.forEach(task => {
        createElement(task, ul);
    });
}

//Function to create a list item element
function createElement(textToAppend, ul) {
    const li = document.createElement('li');
    li.textContent = textToAppend;

    //Add event listeners to the li items
    li.addEventListener('mouseover', greenBackground);
    li.addEventListener('mouseout', whiteBackground);

    ul.appendChild(li);
}

//Function to change the background color of the ul to green
function greenBackground() {
    const ul = document.getElementById('list');
    ul.style.backgroundColor = 'green';
}

//Function that resets the background color of the ul back to default (white)
function whiteBackground() {
    const ul = document.getElementById('list');
    ul.style.backgroundColor = 'white';
}

// Function to display the status
function displayStatus(hiddenText, task) {
    //Retrieve the status element
    const statusDiv = document.getElementById('status');

    //Check if a task was provided
    if (task) {
        //Display the status with the hiddenText and task values
        statusDiv.textContent = `${hiddenText} "${task}"`;

        //Create a new list item for the task and add it to the task list
        createElement(task, document.getElementById('list'));

        //Clear the input box for tasks
        document.getElementById('task').value = '';
    } else {
        //Display a message indicating that no value was entered
        statusDiv.textContent = 'You didn’t enter a value.';
    }
}