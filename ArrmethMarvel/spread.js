let num=[1,2,3,4,5,6,7,8,9,0,9,8,65,4,3,];

console.log(Math.min(...num));

console.log(Math.max(...num));

console.log(...num)

console.log(..."manish yadav")

// ARRAY LITERAL

let arr=[0,9,8,7,6,5];

let newOne=[...arr,...num];

// OBJECT LITERALS

const data={
    name:"manish yadav",
    mark:98
}

const dat={
    name:"ironman",
    email:"ironman@gmail.com"
}

let copy={...data,id:23,email:dat.email};

let arrr={..."kesh yadav"}
