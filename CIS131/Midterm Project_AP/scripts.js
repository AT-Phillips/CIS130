//Austin Phillips, 23/FA-CIS-131-W01, 10/09/23, "Midterm", scripts.js
var stopLight = document.getElementById('stop-light');
var winnerImage = document.getElementById('winner');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var raceContainer = document.getElementById('race-container');

function startRace() {
    stopLight.src = 'go.jpg';

    //Generate random advancements for players
    var player1Advancement = Math.random() * 10;
    var player2Advancement = Math.random() * 10;

    //Initialize player distances
    var distance1 = 0;
    var distance2 = 0;

    function movePlayer1() {
        distance1 += player1Advancement;
        player1.style.marginLeft = distance1 + 'px';
        if (distance1 >= raceContainer.clientWidth - player1.clientWidth) {
            clearInterval(interval1);
            declareWinner('Player 1', 'rabbitwon.jpg');  //Pass winner image for Player 1
        }
    }

    function movePlayer2() {
        distance2 += player2Advancement;
        player2.style.marginLeft = distance2 + 'px';
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

    stopLight.src = 'stop.jpg';

    winnerImage.style.display = 'none';
}
