//Austin Phillips, 23/FA-CIS-131-W01, 10/09/23, "Midterm", scripts.js

//Get DOM elements
var stopLight = document.getElementById('stop-light');
var winnerImage = document.getElementById('winner');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var raceContainer = document.getElementById('race-container');

//Change 'stop' image to 'go' image
function startRace() {
    stopLight.src = 'go.jpg';

    //Generate random advancements for players
    var player1Advancement = Math.random() * 10;
    var player2Advancement = Math.random() * 10;

    //Initialize player distances
    var distance1 = 0;
    var distance2 = 0;

    //Function to move player 1 in the race
    function movePlayer1() {
        distance1 += player1Advancement;
        player1.style.marginLeft = distance1 + 'px';
        //Check if player 1 has reached the finish line
        if (distance1 >= raceContainer.clientWidth - player1.clientWidth) {
            clearInterval(interval1);
            declareWinner('Player 1', 'rabbitwon.jpg');  //Pass winner image for Player 1
        }
    }

        //Function to move player 2 in the race
    function movePlayer2() {
        distance2 += player2Advancement;
        player2.style.marginLeft = distance2 + 'px';
        //Check if player 1 has reached the finish line
        if (distance2 >= raceContainer.clientWidth - player2.clientWidth) {
            clearInterval(interval2);
            declareWinner('Player 2', 'turtlewon.jpg');  //Pass winner image for Player 2
        }
    }

    var interval1 = setInterval(movePlayer1, 50);
    var interval2 = setInterval(movePlayer2, 50);
}

function declareWinner(winner, winnerImageSrc) {
    //Display the winner image and message
    winnerImage.style.display = 'block';
    winnerImage.src = winnerImageSrc;  //Set the winner image source
    winnerImage.alt = winner + ' wins!';
    winnerImage.innerText = winner + ' wins! Click to reset.';
}

function resetRace() {
    player1.style.marginLeft = '0';
    player2.style.marginLeft = '0';

    //Switch back to 'stop' image
    stopLight.src = 'stop.jpg';

    winnerImage.style.display = 'none';
}
