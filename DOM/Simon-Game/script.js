let red=document.querySelector("#red");
let yellow=document.querySelector("#yellow");
let blue=document.querySelector("#blue");
let green=document.querySelector("#green");

// red.addEventListener("click",click);
// yellow.addEventListener("click",click);
// green.addEventListener("click",click);
// blue.addEventListener("click",click);

function click(){
    console.log("clicked");

}

let gameSeq=[];
let userSeq=[];
let started= false;
let level=0;
let btns=["yellow","blue","green","red"];

let h3=document.querySelector("h3");

// let badabox=document.querySelectorAll(".box");

document.addEventListener("keypress",function(){
    // console.log("game start");
    if(started==false){
        console.log("game start");
        started=true;

        // setTimeout(levelUp(),1000)
        levelUp();
        
    }
})

function levelUp(){

   
    userSeq=[];
    level++;
     

    h3.innerText=`Level - ${level}`

    // randon 
    let randomId=Math.floor(Math.random()*4);
    let randomColor=btns[randomId];
    let randomBtn=document.querySelector(`#${randomColor}`);
    // console.log(randomBtn);
    // // console.log(randomBtn)
    // console.log(randomColor)
    // console.log(randomId);
    gameSeq.push(randomColor);
    console.log(gameSeq);


    flashClass(randomBtn);

}

function flashClass(btn){
    // btn.classList.add("white");
    // btn.id="white";
    btn.classList.add("white");
    setTimeout(function(){
        // btn.removeAttribute("id");
            btn.classList.remove("white");
    },250)
}
function userFlash(btn){
    // btn.classList.add("white");
    // btn.id="white";
    btn.classList.add("userColor");
    setTimeout(function(){
        // btn.removeAttribute("id");
            btn.classList.remove("userColor");
    },250)
}

function btnPress(){
    // console.log("btn was press");
    // console.log(this)
    let btn=this;
    userFlash(btn)
    let userColor=btn.getAttribute("id")
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);

}


let allBtns=document.querySelectorAll(".box");

for(bt of allBtns){
    bt.addEventListener("click",btnPress);
}
let h2=document.querySelector("h2");

function checkAns(idx){
    // console.log("check level"+level);
    // let idx=level-1;

    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same");
        if(userSeq.length==gameSeq.length){

            setTimeout(levelUp(),1000)
            // levelUp();
        }
    }else{
        // console.log("not same");
         h3.innerHTML=`Game-Over .<b>Score = ${level}</b> `;
         h2.innerText=`Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="aqua";
        },150);

        reset ();
    }
}

function reset(){

    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

