let gussNumber=Math.trunc( Math.random()*20)+1;
let score=20;
let highScore=0;
const displayMessage=function(msg){
    document.querySelector('.massege').textContent=msg;
}
const displayscore=function(sc){
    document.querySelector('.score').textContent='score:'+sc;
}

//take number
document.querySelector('.cheek').addEventListener(
    'click',function(){
        const newNumber=Number(document.querySelector('.guss').value);
        if(!newNumber){
            if(score>1){
            displayMessage('no number');
            score--;
            displayscore(score);
            }
            else
            displayMessage('You lost game');
        }
        else if(newNumber=== gussNumber)
        {
            if(score>highScore)
            {
                highScore=score;
                document.querySelector('.highscore').textContent="highScore :"+highScore;
            }
            document.querySelector('body').style.background="green";
            
            displayMessage('correct number');
            document.querySelector('.number').textContent=newNumber;
        }
        //refactored code...
        else if(newNumber!==gussNumber){
            if(score>1){
                displayMessage(newNumber>gussNumber ? 'You are high' : 'You are low');
                score--;
                displayscore(score);
            }
            else{
                displayMessage('You lost game');
                displayscore(0);
            }
        }
    }
)
//again button
document.querySelector('.again').addEventListener('click',function(){
    gussNumber=Math.trunc( Math.random()*20)+1;
    score=20;
    displayscore(score);
    document.querySelector('.number').textContent="?";  
    displayMessage('Gussing start...');
    document.querySelector('body').style.background="black";
    document.querySelector('.guss').value='';
    


})