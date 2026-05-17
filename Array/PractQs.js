// PractQs

let month=["january","july ","march ","august"]
// console.log(month);
// month.shift()
// month.shift()
// month.unshift("june")
// month.unshift("july")

// console.log(month)
// console.log(month.indexOf("june"))
// console.log(month.indexOf("111"))  // array mai data ka index num search karne ke liye
// console.log(month.includes("july"))  ///arr mai hea ya nahi search karne ke liye
// console.log(month.includes("JULY"))  //FALSE BECAUSE YE CASE SENSITIVE HEA.
month.splice(0,2,"july ","june")
console.log(month);


// PRACTICE QS2

let language=["python","java","c","c++","c#","html","css","javascript","php","ruby","golang"]
let rev=language.reverse()
console.log(rev.indexOf("javascript"))


