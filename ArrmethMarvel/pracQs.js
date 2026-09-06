// 1

let num=[2,3,4,89,0,8,76];

let fil=num.every((i)=>(i%10==0))
console.log(fil);

let min= num.reduce((min,i)=>{
    if(min<i){
        return min;
    }else{
        return i;
    }
})

console.log(min);