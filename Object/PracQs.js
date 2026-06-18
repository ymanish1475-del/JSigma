// qs1

// let num=Math.random()*100+1;

// let num=Math.random()*5+1;
// let num=Math.random()*6+1

// console.log(Math.floor(num))

let num=prompt("Max Num :- ")

nums=Math.random()*num+1;

while(true){

    let n=prompt("your Num : ")
if(n===nums){
    console.log("you Win")
    break;
}else{
    n=prompt("your Num : ")
}

if(n==="quit"){
    console.log("intensionaly break");
    break;
}

}

