
let fruit=["banana","mango","apple"]

for ( let i of fruit){
    console.log(i)
}

let name="manish yadav"
for(i of name){
    console.log(i)
}

//nested loop

let hero=[["ironman","spiderman","dr.strange","cap.America"],["flash","batman"]]

for(i of hero){
    console.log(i)
    for(j of i){
        console.log(j)
    }
}