console.log("1- Loop For And Concept Of Loop");
console.log("-".repeat(20));

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("2- Looping On Sequences");
console.log("-".repeat(20));

let myFriends = ["Maged", "Eshak", "Sadek", 1, 6,"Mariam","Viola",481]
let onlyNumber = [];
let onlyString = [];


console.log("myFriends Array");
console.log("=".repeat(20));

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}

console.log("=".repeat(20));
console.log("myFriends Array if Number");
console.log("=".repeat(20));

for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "number") {
        onlyNumber.push(myFriends[i]);
    } else {
        onlyString.push(myFriends[i]);
    }
}
    console.log(onlyNumber);
    
    console.log("=".repeat(20));
    console.log("myFriends Array if String");
    console.log("=".repeat(20));

    
    console.log(onlyString);
