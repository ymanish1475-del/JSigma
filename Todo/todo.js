let todo=[];

let req=prompt("enter your request")

console.log(req)

while(true){
    if(req=="quit"){
        console.log("you are quittin");
        break;
    }

    if(req=="list"){
        console.log("--------------")
        for(task of todo){
            console.log(task)
        }
    }

    if(req=="add"){

    }

    if(req=="remove"){

    }else{
        break;
    }


}