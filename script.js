"use strict"

let firstName= prompt("what is your first name?")
let secondName= prompt("what is your secondname?")
let bDay= prompt("What year were you born?")

let userName=firstName.substr(0,2)+secondName+bDay.substr(-2)
alert(`your username is ${userName}`)

let sentence="the quick brown fox jumped over the lazy sleeping dogs"
alert(sentence.indexOf("quick"))
alert(story.replaceAll("e","*"))


var redHorse=document.getElementById("redHorse")
var blueHorse=document.getElementById("blueHorse")

var redHorseX=0
var blueHorseX=0

function move(){
    
    redHorse.style.left = redHorseX +"px"
    redHorseX += Math.floor(Math.random()*10)
    
    blueHorse.style.left = blueHorseX +"px"
    blueHorseX += Math.floor(Math.random()*10)

    
    
    
        
    if(redHorseX>=800){
        alert("Congrats Red horse wins!")
        redHorseX=0

    }   

    if(blueHorseX>=800){
        alert("Congrats Blue horse wins!")
        blueHorseX=0
        
    }
    
    
    




}

//.horse{width:15px;position:absolute:absolute;background-color:blue}
const numHorses = 5
let horses=[] //an array of horses elements
let horses=[] //an array containing the pixel position of every horse

let colors

let colors=["red", ""]

function startRace(){

    setInterval(move,50)  

}










