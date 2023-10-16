//Austin Phillips, 23/FA-CIS-131-W01, 10/16/23, "Rocket Launch Project", scripts.js

//Fetch and display data from API endpoint
function fetchData(apiEndpoint, displayFunction, dataContainer) {
    const xhr = new XMLHttpRequest();

    // Callback function to handle the response from the API request
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                displayFunction(data, dataContainer);
            } else {
                console.error('Error fetching data:', xhr.status, xhr.statusText);
            }
        }
    };

    //GET request for API endpoint
    xhr.open('GET', apiEndpoint, true);
    xhr.send();
}

//Display astronaut data on the webpage
function displayAstronautData(astronauts, dataContainer) {
    dataContainer.innerHTML = '';

    //Displaying details for up to 5 astronauts
    for (let i = 0; i < Math.min(astronauts.length, 5); i++) {
        const astronaut = astronauts[i];
        const astronautInfo = document.createElement('div');
        astronautInfo.innerHTML = `
            <strong>Name:</strong> ${astronaut.name}<br>
            <img src="${astronaut.image}" alt="Astronaut Image" width="100"><br>
            <strong>Bio:</strong> ${astronaut.bio}<br><br>
        `;
        dataContainer.appendChild(astronautInfo);
    }
}

//Display launch data on the webpage
function displayLaunchData(launches, dataContainer) {
    dataContainer.innerHTML = '';

    //Info for 5 launches
    for (let i = 0; i < Math.min(launches.length, 5); i++) {
        const launch = launches[i];
        const launchInfo = document.createElement('div');
        launchInfo.innerHTML = `
            <strong>Name:</strong> ${launch.mission_name}<br>
            <strong>Location:</strong> ${launch.launch_site.site_name_long}<br>
            <strong>Date:</strong> ${new Date(launch.launch_date_utc).toLocaleString()}<br><br>
        `;
        dataContainer.appendChild(launchInfo);
    }
}

//Fetch and display astronaut data
function fetchAstronautData() {
    const apiUrl = 'ASTRONAUT_API_ENDPOINT';
    fetchData(apiUrl, displayAstronautData, astronautDataContainer);
}

//Fetch and display launch data
function fetchLaunchData() {
    const apiUrl = 'LAUNCH_API_ENDPOINT';
    fetchData(apiUrl, displayLaunchData, launchDataContainer);
}
