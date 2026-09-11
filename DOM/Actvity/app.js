

// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     btn.style.color="#CC27F5";
// })

// let h1=document.querySelector("h1");

// let inp=document.querySelector("input");

// inp.addEventListener("mouseout",function(){
//     console.log("mouseout");

    // let filtered = inp.value.replace(/[^a-zA-Z ]/g, "");
 
      // Update the input itself so invalid chars never stay visible
    //   inp.value = filtered;
    // h1.innerText=filtered;
// })
// let inp=document.querySelector("input");
// let h1=document.querySelector("h1");

// inp.addEventListener("input" , function(){
//     console.log(this.value);
//     h1.innerText=this.value;
// })

// let form= document.querySelector("form");

// form.addEventListener("submit",function(e){
//     e.preventDefault();
// })
// let user=document.querySelector("#user");



// user.addEventListener("change",function(){      //initial and final change ko track karta hea
//     console.log("change");
//     console.log(this.value)
// })

// user.addEventListener("input",function(){      //initial and final change ko track karta hea
//     console.log("change event");
//     console.log(this.value)
// })





// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log("submitted");
//     console.dir(form);
// let user=this.elements[0]  // = form.element[0]
// let pass=this.elements[1]

// // console.log(inp);
// console.log(user.value);
// console.log(pass.value);

// alert(`hi ${user.value} , your password is set to ${pass.value}`);

//     // alert("form submitted");
// })


// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     // console.log("color is change");
//     let h1= document.querySelector("h1");
//     let random=randonColor();
//     h1.innerText=random;

//     let box=document.querySelector("#box");

//     box.style.backgroundColor=random;

   

    

    
// })
//  let div =document.querySelector("div");

//  div.addEventListener("click",()=>{
//     let random=randonColor();
//     div.style.backgroundColor=random;
//  })
// function randonColor(){
//     let red= Math.floor(Math.random()*255);
//     let blue= Math.floor(Math.random()*255);
//     let green= Math.floor(Math.random()*255);

//     let color=`RGB(${red},${green},${blue})`;

//     return color;
// }

// let badaox=document.querySelector("#badabox");

// badaox.addEventListener("mouseenter",()=>{
//     let random=randonColor();
//     badabox.style.backgroundColor=random;

// })

// let button=document.querySelector("button");


// button.addEventListener("dblclick",function(e){
//     console.log(e);
//     // this.style.backgroundColor="aqua";
//     // this.style.border="aqua";
// })

// let inp=document.querySelector("input")

// inp.addEventListener("keydown",function(e){
//     console.log("key was clicked");
// })
// inp.addEventListener("keyup",function(e){
//     console.log(e.key);
//      console.log(e.code);
//     console.log("key release");
    
// })

// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");



// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="aqua";
// }

// h1.addEventListener("click",changeColor)
// h3.addEventListener("click",changeColor)
// p.addEventListener("click",changeColor)

// h1.addEventListener("click",function(){

//     console.dir(this.innerText);
//     this.style.backgroundColor="aqua";


// })

// h3.addEventListener("click",function(){
//     console.dir(this.innerText);
//      this.style.backgroundColor="aqua";
// })

// p.addEventListener("click",function(){
//     console.dir(this.innerText);
//      this.style.backgroundColor="aqua";
// })


