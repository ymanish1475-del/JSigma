// PractQs

let month=["january","july ","march ","august"]
console.log(month);
month.shift()
month.shift()
month.unshift("june")
month.unshift("july")

console.log(month)
console.log(month.indexOf("june"))
console.log(month.indexOf("111"))  // array mai data ka index num search karne ke liye
console.log(month.includes("july"))  ///arr mai hea ya nahi search karne ke liye
console.log(month.includes("JULY"))  //FALSE BECAUSE YE CASE SENSITIVE HEA.

