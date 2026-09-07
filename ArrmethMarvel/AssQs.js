

// 1. squre and sum  and av
let arr=[1,2,3,4]
console.log(arr.length)

let squre=arr.map((el)=>(el*el))

// let sum=arr.reduce((sum,el)=>(sum+el))

let sum=0;

let av=arr.reduce((el,sum)=>{
    sum+=el;
    // console.log(sum)
    return sum/arr.length;
})


// 2.
let five=arr.map((el)=>(el+5))

// 3.upperxase
let lower=["apple","banana","mango"]

let uppp=lower.map((el)=>(el.toUpperCase()))

// 4. arr unchanged and args double


let four=(arr,...args)=>[...arr,...args.map((i)=>i*2)]


// 5. merge object

let first={
    name:"manish yadav",
    age:19,
    username:1112,
}

let second={
    namee:"Aman yadav",
    agee:15,
    usernamee:1109
}

let merge=(first,second)=>({...first,...second})     //same key par value override ho jati hea.
console.log(merge(first,second));   

