let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore_para = document.querySelector("#user-score");
const compscore_para = document.querySelector("#comp-score");


const gencompchoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];
}
const draw = () => {
    console.log("game was draw!! play again!");
    msg.innerText = "Draw!!"
    msg.style.backgroundColor = "#13104F"
}
const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscore_para.innerText = userscore;
        console.log("you win!!!");
        msg.innerText = `you win!! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }
    else {
        computerscore++;
        compscore_para.innerText = computerscore;
        console.log("you lose!!!");
        msg.innerText = `you lost!! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playgame = (userchoice) => {
    console.log("user choice is ", userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice is", compchoice);
    if (userchoice == compchoice) {
        draw();
    }
    else {
        let userwin = true;
        if (userchoice === "Rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "Paper") {
            userwin = compchoice === "Scissors" ? false : true;
        }
        else {
            userwin = compchoice === "Rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});