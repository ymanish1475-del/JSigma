let mul= function multi(a,b){
    return a*b;
}

// console.log(mul(4,6));

let name=function(name){
    console.log(name);
}
// name("manish yadav")

// higher order function

let multigreet= function(func,n){
    for(let i=0;i<=n;i++){
        func();
    }
}

function greet(){
    console.log("hello");
}

// multigreet(greet,6)

function evenOddFactory(request){

    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0))
        }
    }if(request=="even"){
        return function(n){
            console.log(n%2==0)
        }
    }
}
// evenOddFactory("odd")

const calc={
    num:88,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
            return a-b;
        },

    mul:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    }

    
}


