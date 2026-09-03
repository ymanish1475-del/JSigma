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

const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b
    },
    div(g,h){
        return g/h;
    },
    mul(h,s){
        return h*s
    }
}

const profile={
    name:"manish",
    age:19,
    m:89,
    p:45,
    c:34,

    getavg(){
       let  avg=(this.m+this.p+this.c)/3
        console.log(avg);
    }

}

//this -> use for using the element inside of inner function of the outer function