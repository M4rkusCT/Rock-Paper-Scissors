"use strict";
const tools1 = document.getElementById("tools");
const play = document.getElementById("play");
const tools2 = {1:"rock", 2:"paper", 3:"scissors"};
var userTool = "";
var color = "";

tools1.addEventListener("click", (e) => {
    e.preventDefault();
    if(!userTool) {
        userTool = e.target.id;
        color = e.target.parentElement;
        if(userTool === "rock" || userTool === "paper" || userTool === "scissors") {
            color.style.background =  "green";
        }
    }
    else {
        color.style.background = "white";
        color = e.target.parentElement;
        userTool = e.target.id;
        if(userTool === "rock" || userTool === "paper" || userTool === "scissors") {
            color.style.background =  "green";
        }
    }
});

const playGame = (user, ia) => {
    if(user === "rock" && ia === "paper") {
        Swal.fire({
            icon: 'error',
            title: 'IA win'
        });
        color.style.background =  "white";
    }
    else if(user === "paper" && ia === "rock") {
        Swal.fire({
            icon: 'success',
            title: 'You win'
        });
        color.style.background =  "white";
    }
    else if(user === "paper" && ia === "scissors") {
        Swal.fire({
            icon: 'error',
            title: 'IA win'
        });
        color.style.background =  "white";
    }
    else if(user === "scissors" && ia === "paper") {
        Swal.fire({
            icon: 'success',
            title: 'You win'
        });
        color.style.background =  "white";
    }
    else if(user === "scissors" && ia === "rock") {
        Swal.fire({
            icon: 'error',
            title: 'IA win',
        });
        color.style.background =  "white";
    }
    else if(user === "rock" && ia === "scissors") {
        Swal.fire({
            icon: 'success',
            title: 'You win'
        });
        color.style.background =  "white";
    }
}

play.addEventListener("click", (e) => {
    e.preventDefault();
    if(userTool) {
        let numTool = Math.floor(Math.random() * 3) + 1;
        let iaTool =  tools2[numTool];
        playGame(userTool, iaTool);
    }
    else alert("You have to choose a tool");
});