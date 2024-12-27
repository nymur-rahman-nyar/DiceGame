// import the roll button 

const roll_button = document.getElementById("roll_button");
const img_cmput_dice = document.getElementById("img_cmput_dice");
const img_player_dice = document.getElementById("img_player_dice");

// we are getting the score counter here 
const computer_score = document.getElementById("computer_score");
const player_score = document.getElementById("player_score");
// scores 

let c_score = 0;
let p_score = 0;

roll_button.addEventListener('click', () => {game(img_cmput_dice, img_player_dice)});



function game(par_img, play_img){
    
    


    var list = ['one', 'two', 'three', 'four', 'five', 'six'];
    var random_dice = getRandomInt(0,6);
    var random_dice2 = getRandomInt(0,6);
    
    c_score = c_score + random_dice+1;
    p_score = p_score + random_dice2+1;

    par_img.src = `images/dice_${list[random_dice]}.svg`;  
    play_img.src = `images/dice_${list[random_dice2]}.svg`; 


    
    // updating the scores 

    computer_score.innerHTML = c_score
    player_score.innerHTML= p_score

    if(c_score >= 100 || p_score >= 100){
        if(c_score >= 100){
            alert("Computer Won!");
        }
        else{
            alert("Player Won!");
        }
        c_score = 0; 
        p_score = 0;
    }


    

};



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}