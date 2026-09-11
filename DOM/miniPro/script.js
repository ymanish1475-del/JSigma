
let inp=document.querySelector("input");
let btn=document.querySelector("button");

let ol=document.querySelector("ol")
// let del=document.querySelector("#del");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    
    if(inp.value!=""){
        item.innerText=inp.value;
    
    

    }
    let deleteItem=document.createElement("button");
    deleteItem.innerText="delete";
    deleteItem.classList.add("del");
    // let li=document.querySelectorAll("li")
    item.appendChild(deleteItem);
//     deleteItem.addEventListener("click",function(){
//     item.innerText=null;
//     item.value=null;
// })
ol.appendChild(item)
    inp.value=null;
    
})

ol.addEventListener("click",function(e){
    // console.log("button is clicked");
    // console.dir(e.target.nodeName)

    if(e.target.nodeName=="BUTTON"){
        let itemList=e.target.parentElement;
        itemList.remove();
    }

})
// let delbtn=document.querySelectorAll(".del");
// console.log(delbtn.innerText)



// for( delbtn of delbtn){
//     // console.log(i);

//     delbtn.addEventListener("click",function(){
//          let par= this.parentElement;
        
//         console.log(par);
//          par.remove();
//     })
   
// }



// del.addEventListener("click",function(){
//     // this.value=null;
//     console.log(li.innerText)
// })



// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let li=document.querySelectorAll("li");

// div.addEventListener("click",function(e){
//     e.stopPropagation();   // block click event on its below element
//     console.log("div was clicked");
// });
// ul.addEventListener("click",function(e){
//     e.stopPropagation();
//     console.log("ul was clicked");
// });
// // li.addEventListener("click",function(){
// //     console.log("li was clicked");
// // })

// for(i of li){
//     i.addEventListener("click",function(e){
//         e.stopPropagation();

//         console.log("li was clicked");
//     })
// }