function hello(){
    console.log("hello")


   
}

//  hello();
//  hello()


function poem(){
    console.log("Twinkle twinkle little star,")
    console.log("how i wonder what you are,")
    console.log("up above the world so high,")
    console.log("like a diamond in the sky.")
}
// poem()

function ludo(){
    console.log(Math.floor(Math.random()*6)+1)
}

// ludo();
function name(name){
    console.log(name);
}
manish="kumar";

// name(manish);

function av(a,b,c){
    
    console.log("av is "+(a+b+c)/3);
}
// let a=Number(prompt("enter a : "))
// let b=Number(prompt("enter b : "))
// let c=Number(prompt("enter c : "))
// av(a,b,c);



function table(a){
    for(let i=1;i<=12;i++){
        let sum=i*a


    }
    // return sum;
}
// let a=Number(prompt("enter a : "))
// table(a)
// console.log(sum)

function sum(a,b){
    return (a*b)/2;
}
let a=Number(prompt("enter a : "))
let b=Number(prompt("enter b : "))

console.log(table(a,b))


