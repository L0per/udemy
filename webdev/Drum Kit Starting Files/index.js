
// Click and button press detection

document.querySelectorAll("button").forEach( item => {
    item.addEventListener("click", function() {

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
})

document.addEventListener('keydown', function() {

    let keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed)
})

// Sound

function makeSound(key) {

    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
            break;
            
        case "d":
            var tom2 = new Audio("sounds/tom-4.mp3");
            tom2.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.play();
            break;
        
        case "k":
            var tom2 = new Audio("sounds/kick-bass.mp3");
            tom2.play();
            break;

        case "l":
            var tom2 = new Audio("sounds/snare.mp3");
            tom2.play();
            break;

        default:
            break;
    }
}

// Animation

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100)
}
