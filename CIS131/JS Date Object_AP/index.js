//Austin Phillips, 23/FA-CIS-131-W01, 10/02/23, "JS Date Object", index.js

function formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `Today is ${month} ${day}, ${year}`;
}

function addDate(daysToAdd) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + daysToAdd);

    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][tomorrow.getDay()];
    const month = months[tomorrow.getMonth()];
    const day = tomorrow.getDate();
    const year = tomorrow.getFullYear();

    console.log(`Tomorrow is ${dayOfWeek}, ${month} ${day}, ${year}`);
}

//Create a Date object for today
const today = new Date();
console.log(formatDate(today));

//Add a day to the Date object and output the result
today.setDate(today.getDate() + 1);
console.log(formatDate(today));

//Add 10 days to today's date and output the result
addDate(10);

//Add 45 days to today's date and output the result
addDate(45);