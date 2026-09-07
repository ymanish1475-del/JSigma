let names=["tony stark","bruce banner","steve rodger","thor","peter parker","dr.strange"];

let [winner,runnerup,second , third,...other]=names;

console.log(winner,runnerup,second,third,);

// destructing with object;

const student ={
    name:"aman",
    class:10,
    username:"aman@10",
    password:110912,
    subject:["hindi","english","s.s","math","e.t","science"],
    // city:"mumbai"

}

let {username,password:secret,city:place="jabapur"}=student;
//               ^         ^
//               |         | 
//key search in object     |
//             asign in variable