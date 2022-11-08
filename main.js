const play = document.getElementById("play");
const tools = {1:"rock", 2:"paper", 3:"scissors"};

const playGame = (user, ia) => {
    if(user === "rock" && ia === "paper") alert("Win the IA " + ia);
    else if(user === "paper" && ia === "rock") alert("Win you");
    else if(user === "paper" && ia === "scissors") alert("Win the IA " + ia);
    else if(user === "scissors" && ia === "paper") alert("Win you");
    else if(user === "scissors" && ia === "rock") alert("Win the IA " + ia);
    else if(user === "rock" && ia === "scissors") alert("Win you");
}

play.addEventListener("click", (e) => {
    e.preventDefault();
    let numTool = document.querySelector('input[type="radio"]:checked').value;
    const userTool = tools[numTool];
    numTool = Math.floor(Math.random() * 3) + 1;
    const iaTool =  tools[numTool];
    playGame(userTool, iaTool);
});