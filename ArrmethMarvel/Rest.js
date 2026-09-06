function sum(...args){

    for(let i=0;i<args.length;i++){
        console.log("you gave us ",args[i])
    }

    // console.log("you gave us ",args[i])

}

// argumant is a prebuilt collection 


function min(msg,...args){

    console.log(msg)

    return args.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    });

    console.log(arguments)
}