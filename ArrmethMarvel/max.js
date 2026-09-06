let num=[1,2,3,4,5,6,7,6,5,4,5,7,8,98,8,65,43];

let max=-1;

for(let i=0;i<num.length;i++){
    if( max<num[i]){
        max=num[i];
    }

}

console.log(max)

let maxx= num.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
})

console.log(maxx)