//document.write("<script type='text/javascript' src='start.js'></script>");
function init(){
    scores = [1000, 1000, 1000, 1000];
    
    activePlayer = 0;
    gamePlaying = true;
    rollDice = true;
    totalMoney = 800;
    loser = [true, true, true, true];
    
    document.getElementById('dice-1').style.display = 'none'; // uses dot when class, # when id
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = scores[0];
    document.getElementById('score-1').textContent = scores[1];
    document.getElementById('score-2').textContent = scores[2];
    document.getElementById('score-3').textContent = scores[3];
    document.getElementById('all-money').textContent = totalMoney;

    // palyer name
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('name-2').textContent = 'Player 3';
    document.getElementById('name-3').textContent = 'Player 4';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-2-panel').classList.remove('winner');
    document.querySelector('.player-3-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('loser');
    document.querySelector('.player-1-panel').classList.remove('loser');
    document.querySelector('.player-2-panel').classList.remove('loser');
    document.querySelector('.player-3-panel').classList.remove('loser');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-3-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function cont(){
    scores[0] -= 200;
    scores[1] -= 200;
    scores[2] -= 200;
    scores[3] -= 200;
    activePlayer = 0;
    gamePlaying = true;
    rollDice = true;
    totalMoney = 800;
    loser = [true, true, true, true];
    
    document.getElementById('dice-1').style.display = 'none'; // uses dot when class, # when id
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = scores[0];
    document.getElementById('score-1').textContent = scores[1];
    document.getElementById('score-2').textContent = scores[2];
    document.getElementById('score-3').textContent = scores[3];
    document.getElementById('all-money').textContent = '800';

    // palyer name
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('name-2').textContent = 'Player 3';
    document.getElementById('name-3').textContent = 'Player 4';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-2-panel').classList.remove('winner');
    document.querySelector('.player-3-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('loser');
    document.querySelector('.player-1-panel').classList.remove('loser');
    document.querySelector('.player-2-panel').classList.remove('loser');
    document.querySelector('.player-3-panel').classList.remove('loser');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-3-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer(){
    // Next player    
    //if (activePlayer < 3) activePlayer++;
    //else activePlayer = 0;
    
    if (activePlayer === 0 && loser[1]) activePlayer = 1;
    else if (activePlayer === 0 && loser[1] === false && loser[2]) activePlayer = 2;
    else if (activePlayer === 0 && loser[1] === false && loser[2] === false && loser[3]) activePlayer = 3;
    else if (activePlayer === 0 && loser[1] === false && loser[2] === false && loser[3] === false) activePlayer = 0;
    else if (activePlayer === 1 && loser[2]) activePlayer = 2;
    else if (activePlayer === 1 && loser[2] === false && loser[3]) activePlayer = 3;
    else if (activePlayer === 1 && loser[2] === false && loser[3] === false && loser[0]) activePlayer = 0;
    else if (activePlayer === 1 && loser[2] === false && loser[3] === false && loser[0] === false) activePlayer = 1;
    else if (activePlayer === 2 && loser[3]) activePlayer = 3;
    else if (activePlayer === 2 && loser[3] === false && loser[0]) activePlayer = 0;
    else if (activePlayer === 2 && loser[3] === false && loser[0] === false && loser[1]) activePlayer = 1;
    else if (activePlayer === 2 && loser[3] === false && loser[0] === false && loser[1] === false) activePlayer = 2;
    else if (activePlayer === 3 && loser[0]) activePlayer = 0;
    else if (activePlayer === 3 && loser[0] === false && loser[1]) activePlayer = 1;
    else if (activePlayer === 3 && loser[0] === false && loser[1] === false && loser[2]) activePlayer = 2;
    else if (activePlayer === 3 && loser[0] === false && loser[1] === false && loser[2] === false) activePlayer = 3;
               
    if (activePlayer === 0){
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-2-panel').classList.remove('active');
        document.querySelector('.player-3-panel').classList.remove('active');
    } else if (activePlayer === 1){
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-2-panel').classList.remove('active');
        document.querySelector('.player-3-panel').classList.remove('active');
    } else if (activePlayer === 2){
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-2-panel').classList.add('active');
        document.querySelector('.player-3-panel').classList.remove('active');
    } else{
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-2-panel').classList.remove('active');
        document.querySelector('.player-3-panel').classList.add('active');
    }
        
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    rollDice = true;
}

function win(activePlayer){
    scores[activePlayer] += totalMoney;
    totalMoney = 0;
    document.getElementById('all-money').textContent = totalMoney;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    document.getElementById('name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
}

function lose(activePlayer){
    document.getElementById('name-' + activePlayer).textContent = 'Loser!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('loser');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    loser[activePlayer] = false;
    if (loser[0] && loser[1] === false && loser[2] === false && loser[3] === false) win(0);
    else if (loser[1] && loser[2] === false && loser[3] === false && loser[0] === false) win(1);
    else if (loser[2] && loser[3] === false && loser[0] === false && loser[1] === false) win(2);
    else if (loser[3] && loser[0] === false && loser[1] === false && loser[2] === false) win(3);
}

var scores, activePlayer, dice, gamePlaying, totalMoney, rollDice, loser;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying && rollDice && loser[activePlayer]){
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
    
        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        
        // 3. Update the round score
        if (dice1 + dice2 === 7){
            scores[activePlayer] += 100;
            totalMoney -= 100;
            document.getElementById('all-money').textContent = totalMoney;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            if (totalMoney === 0){
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            }
        } else if (dice1 + dice2 === 8){
            scores[activePlayer] -= 100;
            totalMoney += 100;
            document.getElementById('all-money').textContent = totalMoney;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            if (scores[activePlayer] === 0) {
                lose(activePlayer);
            }
        } else if (dice1 + dice2 === 9){
            win(activePlayer);
        } else if (dice1 + dice2 === 10){
            lose(activePlayer);
        }
        rollDice = false;
    }   
});

document.querySelector('.btn-next').addEventListener('click', function(){
    if (gamePlaying) nextPlayer();
});

document.querySelector('.btn-cont').addEventListener('click', function(){
    if (gamePlaying === false && scores[0] >= 200 && scores[1] >= 200 && scores[2] >= 200 && scores[3] >= 200) cont();
})

document.querySelector('.btn-exit').addEventListener('click', function(){
    if (gamePlaying === false) window.location.href="startPage.html";
});