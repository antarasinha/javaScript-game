var scores, roundscore,activeplayer,dice;
var gameplaying=true;
scores=[0,0];
roundscore=0;
activeplayer=0;
document.querySelector('#current-'+activeplayer).textContent=dice;
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.querySelector('.dice').style.display='None';
 

function nextPlayer(){
    
            activeplayer===0? activeplayer=1 :activeplayer=0;
        roundscore=0;
        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;
        
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gameplaying)
    {
    //1. Select any random no. using roll button
    
   
    
    var dice=Math.floor(Math.random()*6)+1;
    //2. display the result in the status of current score
    
    var dicechange=document.querySelector('.dice');
    dicechange.style.display='block';
    dicechange.src='dice-'+dice+'.png';
    
    var temp=dice;
    
        
    //3. add the result to the total score on display if the current score is not 1

    
    //1. if not 1 then add values till 1 comes to current
    if(dice!=1){
    roundscore += dice;
    document.querySelector('#current-'+activeplayer).textContent=roundscore;
    }
    else{
        
        //document.querySelector('#score-'+activeplayer).textContent=roundscore;
        nextPlayer();
    }
    }
})

//now write the code for hold button

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying)
    {
        scores[activeplayer]+=roundscore;
    
    document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    
    
     if(scores[activeplayer]>=100){
        document.querySelector('#name-'+activeplayer).textContent="WINNER";
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
        gameplaying=false;
        
         }
       else
        {
        nextPlayer();//this is called DRY principle
        }
    }
})

document.querySelector('.btn-new').addEventListener('click',initialize)

function initialize(){
    scores=[0,0];
    roundscore=0;
    activeplayer=0;
    document.querySelector('.dice').style.display='None';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.querySelector('#name-0').textContent="player 1";
    document.querySelector('#name-1').textContent="player2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
     document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    gameplaying=true;
}