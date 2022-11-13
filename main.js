"use strict";
const selectTools = document.getElementById("tools");
const play = document.getElementById("play");
const reset = document.getElementById("reset");
const tools = {1:"rock", 2:"paper", 3:"scissors"};
var userTool = "";
var color = "";
var userCont = 0;
var compCont = 0;

selectTools.addEventListener("click", (e) => {
    e.preventDefault();
    if(!userTool) {
        color = e.target;
        userTool = e.target.id;
        if(userTool === "rock" || userTool === "paper" || userTool === "scissors") {
            color.style.background =  "green";
        }
        else userTool = "";
    }
    else if(userTool === "rock" || userTool === "paper" || userTool === "scissors") {
        color.style.background = "white";
        color = e.target;
        userTool = e.target.id;
        if(userTool === "rock" || userTool === "paper" || userTool === "scissors") {
            color.style.background =  "green";
        }
        else userTool = "";
    }
});

const messageResult = (num, comp) => {
    if(num === 1) {
        Swal.fire({
            icon: 'error',
            title: 'Computer win',
            text: `The computer chose: ${comp}`
        });
        compCont++;
        document.getElementById("compCont").innerHTML = compCont;
    }
    else if(num === 2) {
        Swal.fire({
            icon: 'success',
            title: 'You win',
            text: `The computer chose: ${comp}`
        });
        userCont++;
        document.getElementById("userCont").innerHTML = userCont;
    }
    else {
        Swal.fire({
            title: 'Tie',
            text: `The computer chose: ${comp}`
        });
    }
}

const playGame = (user, comp, color) => {
    if(user === "rock" && comp === "paper" || user === "paper" && comp === "scissors" || user === "scissors" && comp === "rock") {
        messageResult(1, comp);
    }
    else if(user === "paper" && comp === "rock" || user === "scissors" && comp === "paper" || user === "rock" && comp === "scissors") {
        messageResult(2, comp);
    }
    else {
        messageResult(3, comp);
    }
    color.style.background =  "white";
    user = "";
    comp = "";
}

play.addEventListener("click", (e) => {
    e.preventDefault();
    if(userTool) {
        let numTool = Math.floor(Math.random() * 3) + 1;
        let compTool =  tools[numTool];
        playGame(userTool, compTool, color);
    }
    else alert("You have to choose a tool");
});

reset.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("userCont").innerHTML = 0;
    document.getElementById("compCont").innerHTML = 0;
    userCont = 0;
    compCont = 0;
});