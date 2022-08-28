const sasuke = document.querySelector('.sasuke');
const pipe = document.querySelector('.pipe');
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameover");

//declaração de variaveis para pontuação
let interval = null;
let playerScore = 0;
const loopSpeed = 10;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

let TotalScore = () => {
    console.log("ta chamando porra")
    let total = playerScore;
    score.innerHTML = `Score <b>${total}</b>`;
}


/*window.addEventListener("keydown", (start) => {
    if (start.code == "Space") {
        loop.style.display = "none";
        pipe.firstElementChild.style.animation = "pipe-animation 1.5s infinite linear"
        sasuke.firstElementChild.style.animation = "jump 500ms ease-out"
    }
},); */


const jump = (e) => {
    if (e.key == "ArrowUp") {
        sasuke.classList.add('jump');

        setTimeout(() => {
            sasuke.classList.remove('jump');

        }, 500);
    }



}

const loop = setInterval(() => {
    playerScore++;

    TotalScore();

}, loopSpeed)

// parte do código responsável por simular a colisão entre o personagem e o cano
const verifySituation = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const sasukePosition = +window.getComputedStyle(sasuke).bottom.replace('px', '');

    if (pipePosition <= 97 && pipePosition > 0 && sasukePosition < 20) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        sasuke.style.animation = 'none';
        sasuke.style.bottom = `${sasukePosition}px`;
         /* 
        caso sasuke encostasse no obstaculo, a imagem trocaria para uma do mesmo caido, porém não achei 
        o PNG que se encaixasse com isso, porém caso queira trocar o personagem, é possível fazer isso 
 
         sasuke.src = 'imagem que substituiria a atual';
         sasuke.style.width = '175px'
         sasuke.style.marginLeft = '50px'
         */

        console.log("bateu")

        clearInterval(loop);

        TotalScore()



    }

}, loopSpeed)

document.addEventListener('keydown', jump)