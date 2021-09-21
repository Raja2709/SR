let buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
let randomNumber;
let randomChooseColour;
let userChosenColour;
let level=0;
let started=false;

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")
    
    setTimeout(()=>{
        $("#" + currentColour).removeClass("pressed")
    },100)
}

$(document).keydown(function(){
    if(!started){
        nextSequence();
        started=true;
    }
})

function nextSequence(){
    level++;

    $("h1").text('Level '+ level)

    randomNumber=Math.floor(Math.random()*4);
    randomChooseColour=buttonColours[randomNumber];
    gamePattern.push(randomChooseColour);
    // console.log(gamePattern)

    $("#"+randomChooseColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChooseColour);

    userClickedPattern=[]
}

$("div").click(function handler(){
    
    userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour)
    // console.log(userClickedPattern)
    $(this).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
    // if(userClickedPattern.length === gamePattern.length){
    //     checkAnswer(userClickedPattern.length-1)
    // }
    
})

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence()
            },1000)
        }    
    }else{
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(()=>{
            $("body").removeClass("game-over")
        },200)
        $("h1").text("Game Over.Press any key to start")
        
        startOver()
    }
}

function startOver(){
    level=0
    started=false
    gamePattern=[]
    userClickedPattern=[]
    $(document).keydown(function(){
        if(!started){
            nextSequence()
            started=true
        }
    })
}
