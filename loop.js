console.log("1- Loop For And Concept Of Loop");
console.log("-".repeat(20));

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("-".repeat(20));
console.log("2- Looping On Sequences");
console.log("-".repeat(20));

let myFriends = ["Maged", "Eshak", "Sadek", 1, 6, "Mariam", "Viola", 481];
let onlyNumber = [];
let onlyString = [];


console.log("myFriends Array");
console.log("=".repeat(20));

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}

console.log("  "+"=".repeat(20));
console.log("myFriends Array if Number");
console.log("  "+"=".repeat(20));

for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "number") {
        onlyNumber.push(myFriends[i]);
    } else {
        onlyString.push(myFriends[i]);
    }
}
    console.log(onlyNumber);
    
console.log("  "+"=".repeat(20));
console.log("myFriends Array if String");
console.log("  " + "=".repeat(20));
    
    console.log(onlyString);
    
console.log("-".repeat(20));
console.log("3- Nested Loops And Training’s");
console.log("-".repeat(20));

let products = ["IPhone", "Google Pixel", "Samsung", "Oppo", "OnePlus", "Xaomi"];
let colors = ["Black", "White", "Green", "Red"];
let models = [2023, 2024, 2025];

console.log("Products :- ");
for (let i = 0; i < products.length; i++){
    console.log("#".repeat(20));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(20));

    console.log("Colors :- ");

    for (let j = 0; j < colors.length; j++) {
        
        console.log(`- ${colors[j]}`);
        
    }
    console.log("Models :- ");

    for (let m = 0; m < models.length; m++) {
        console.log(`- ${models[m]}`);
    }  
}

console.log("-".repeat(20));
console.log("4- Loop Control – Continue, Break, Label");
console.log("-".repeat(20));


console.log("Products :- ");

MainLoop: // Label
for (let i = 0; i < products.length; i++){
    console.log("#".repeat(20));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(20));

    console.log("Colors :- ");

NestedLoop: // Label
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "White") {
            break;        
        }
        
    }
    console.log("Models :- ");

    for (let m = 0; m < models.length; m++) {
        console.log(`- ${models[m]}`);
        if (models[m] === 2021) {
            continue;        
        }
    }
    
    break MainLoop;
}

console.log("-".repeat(20));
console.log("5- Loop For Advanced Examples");
console.log("-".repeat(20));

console.log(products);

console.log("Products afte loop :- ");

let i = 0;
for (;;) {
    console.log(`# ${products[i]}`);
    i += 2;
    if (i === products.length) break;
}

console.log("-".repeat(20));
console.log("6- Loop – While");
console.log("-".repeat(20));

let index = 0;
while (index < products.length) {
    console.log(products[index])
    index++;
}

