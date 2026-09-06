let num=[1,2,3,4,5,6];

let double=num.map((el)=>{
    return el*2;
})

console.log(double)
let arrr=[{
    name:"manish",
    mark:98,
},{
    name:"keshav",
    mark:96
},{
    name:"krishna",
    mark:95
}]

let gpa=arrr.map((el)=>{


    return (el.mark)/10;
}
)

console.log(gpa)