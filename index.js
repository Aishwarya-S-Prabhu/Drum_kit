// document.querySelector("button").addEventListener("click",handleClick)

// function handleClick(){
//     alert("I am clicked");
// }
//annonymous function method

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var iden= this.innerText;
        // console.log(iden);
        action(iden);
        butAnime(iden);
    });
}

// document.addEventListener('keypress',function(event){
//     this.alert("Key was pressed");
//     console.log(event.key);
// });

addEventListener('keypress',function(event){
    // this.alert("Key was pressed");
    // console.log(event.key);
    action(event.key);
    butAnime(event.key)
});
function action(iden){
    var sound ;
    switch (iden) {
        case "w":
            sound = new Audio("./sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s":
            sound = new Audio("./sounds/snare.mp3");
            sound.play();
            break;   
        case "d":
            sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break; 
        case "j":
            sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;    
        case "l":
            sound = new Audio("./sounds/tom-4.mp3");
            sound.play();
            break;                  
        default:
            console.log(iden);
            break;
    }
}

function butAnime(key){
    var Key= document.querySelector("."+key);
    Key.classList.add('pressed');
    setTimeout(() => {
        Key.classList.remove('pressed');
    }, 100);
}

//()=> equivalent to function
// var sound = new Audio("./sounds/tom-1.mp3");
// sound.play();