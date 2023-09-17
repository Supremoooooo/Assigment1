// var numberOfAnimalButtons = document.querySelectorAll(".animal").length;
// for (var i = 0; i < numberOfAnimalButtons; i++) {

//     document.querySelectorAll(".animal")[i].addEventListener("click", function() {
//         this.style.color="violet"
//         // console.log(this);

//     });

// document.querySelectorAll(".cat")[i].addEventListener("click", function() {

//     var cat = new Audio ("/Sound/cat.mp3");
//     cat.play();
    
// });

// document.querySelectorAll(".puppy")[i].addEventListener("click", function() {
//     var puppy = new Audio ("/Sound/puppy.mp3");
//     puppy.play();
    
// });

// document.querySelectorAll(".bee")[i].addEventListener("click", function() {
//     var bee = new Audio ("/Sound/bee.mp3");
//     bee.play();
    
// });

// document.querySelectorAll(".monkey")[i].addEventListener("click", function() {
//     var monkey = new Audio ("/Sound/monkey.mp3");
//     monkey.play();
    
// });
// }

var numberOfAnimalButtons = document.querySelectorAll(".animal").length;
for (var i = 0; i < numberOfAnimalButtons; i++) {

    document.querySelectorAll(".animal")[i].addEventListener("click", function() {
        var buttons = this.innerText;
        playSound(buttons)
        buttonAnimation(buttons)

    });
}
    document.addEventListener("keydown",function(e){
        buttonAnimation(e.key)
        playSound(e.key);
    })


    function playSound(key){
        switch (key) {
            case "c":
                var cat = new Audio ("Sound/cat.mp3");
                cat.play()
                break;
        
            case "p":
                var puppy = new Audio ("Sound/puppy.mp3"); puppy.play();
                break;

            case "b":
                var bee = new Audio ("Sound/bee.mp3");
                bee.play();
                break;

            case "m":
                var monkey = new Audio ("Sound/monkey.mp3");
                monkey.play();
                break;
            default:
                console.log(buttons)
                break;
        }
    }

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
    activeButton.classList.remove("pressed");
    }, 100);
}




