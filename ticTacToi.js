let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame");
let msgCantainer = document.querySelector(".msgCantainer");
let msg = document.querySelector("#msg")

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCantainer.classList.add("hide");
}
box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})
const disableBoxes = () => {
    for (let boxx of box) {
        boxx.disabled = true;
    }
}
const enableBoxes = () => {
    for (let boxx of box) {
        boxx.disabled = false;
        boxx.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgCantainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    i = 0;
    for (let pattern of winPattern) {

        let psn1Val = box[pattern[0]].innerText;
        let psn2Val = box[pattern[1]].innerText;
        let psn3Val = box[pattern[2]].innerText;

        if (psn1Val != "" && psn2Val != "" && psn3Val != "") {
            if (psn1Val === psn2Val && psn2Val === psn3Val) {
                showWinner(psn1Val);

            }
        }


    }



};
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);


