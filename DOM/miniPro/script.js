
let inp=document.querySelector("input");
let btn=document.querySelector("button");
// let li=document.querySelector("li")
let ol=document.querySelector("ol")
let del=document.querySelector("#del");

btn.addEventListener("click", function(){
    let item=document.createElement("li")
    item.innerText=inp.value;
    ol.appendChild(item)
    inp.value=null;
})
del.addEventListener("click",function(){
    // this.value=null;
    console.log(li.innerText)
})



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