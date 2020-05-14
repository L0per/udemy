var gamePattern = [];

var userClickedPattern = [];

var randomColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber
}

function randomChosenColor() {
    let randomColor = randomColors[nextSequence()]
    gamePattern.push(randomColor);
    return randomColor
}

function playSound() {
    let sound = new Audio("sounds/" + randomChosenColor() + ".mp3")
    sound.play();
}

$(".btn").click((e) => {
    let userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern)
})


$("." + randomChosenColor()).fadeOut(200).fadeIn(200)

