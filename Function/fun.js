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



// function table(a){
//     for(let i=1;i<=12;i++){
//         let sum=i*a


//     }
//     // return sum;
// }
// let a=Number(prompt("enter a : "))
// table(a)
// console.log(sum)

// function sum(a,b){
//     return (a*b)/2;
// }
// let a=Number(prompt("enter a : "))
// let b=Number(prompt("enter b : "))

// console.log(table(a,b))

// let a=Number(prompt("enter a num"));

// function table(a){
//     for(i=1;i<=12;i++){
//         console.log(a*i);
//     }
// }


function sum(a,b){
    return a+b;
    // sum(6,7)
    conse.log("hi")
}

// console.log(sum(sum(6,8),9))
let sumo=0;

function sum(n){
    for(i=1;i<=n;i++){
        sumo+=i;
    }
    return sumo;
}
// console.log(sum(10))

let arr=["hello"," my "," name"," billa"];

function concatinate(arr){
    let result="";
    for(i=0;i<arr.length;i++){
        result+=arr[i];
    }
    return result;
}

// console.log(concatinate(arr));

function fun(){
    for(var i=0;i<6;i++){
        console.log(i)
    }
}
// fun()

// console.log(i)

function outer(){
     function inner(){
        console.log(x)
    }
    
     let x=30;
     inner()
    
   
   
    
}
outer()