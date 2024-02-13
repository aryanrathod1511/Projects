let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetButton");
let newGameBtn = document.querySelector(".newGameButton");
let msgCon = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");
let count=0;

let turnO =true;  //playerX, playerO
const winPatt = [
    [0,1,2],
    [0,3,6], [0,4,8],[1,4,7],
    [2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }else {
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true;
        count++;
        isDrawn(count);
        checkWinner(count);
       
    })
});

const isDrawn = (count) => {
    if(count==9){
        msgCon.classList.remove("hide");
        msg.innerText= "Oops!! The game has been drawn.";
        disableBtn();
    }
}

const checkWinner = () => {
   
    for(let pattern of winPatt){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
               let winner = pos1Val;
                showWinner(winner);
            }
        }
    }
};
const disableBtn =() => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes =() => {
    for(let box of boxes){
        box.innerText ="";
        box.disabled = false;

    }
};

const showWinner=(winner) => {
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBtn();
};

const resetGame =() =>{
    turnO =true;
    enableBoxes();
    msgCon.classList.add("hide");
    resetBtn.classList.remove("hide");
    count=0;
};

newGameButton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


