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
         console.log(todo)
        console.log("--------------")
        break;

    }else if(req=="add"){

        let add=prompt("enter your task")
        todo.push(add)
        console.log("Task added");
    //    console.log("list : "+todo)
        }else if(req=="del"){
            let idx=prompt("enter idx num you want to delete")
            todo.slice(idx,1)
            console.log("task deleted")
            console.log(todo)
            break;
        }else{
            console.log("wrong request");
            
        }
        

          req=prompt("enter your request")


    }

    // if(req=="remove"){

    // }else{
    //     break;
    // }

  

