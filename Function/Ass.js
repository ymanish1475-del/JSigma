// 1
const sq=(n)=>{
    return n*n;
}

sq(6)

// 2

// const print =()=>{
    
// }

setTimeout(()=>{console.log("hello!")},2000);
let id= setInterval(()=>{console.log("hello!")},2000);

setTimeout(()=>{
    clearInterval(id)
},10000)


// setTimeout(setInterval(()=>{console.log("hello")},2000),10000)

