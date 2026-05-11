

let size = prompt("enter size in 'xl','l','m','s'");
let price;

if(size=="xl"){

    price=250;

}else if(size=="l"){

    price=200;

}else if(size=="m"){

    price=100;

}else if(size=="s"){

    price=50;

}else{
    alert("please enter right input");
}

console.log(price);