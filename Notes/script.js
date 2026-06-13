const notesContainer=document.querySelector(".notesCon")
const creatBtn=document.querySelector(".btn")
let notes=document.querySelectorAll(".input")

creatBtn.addEventListener("click",()=>{
    let input=document.createElement("p")
    let img=document.createElement("img")
    input.className="input"
    input.setAttribute("contenteditable","true")
    img.src="delete.png"
    notesContainer.appendChild(input).appendChild(img)

})
