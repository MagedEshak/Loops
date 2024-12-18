console.log("----------------------");
console.log("-- حل التكليفات --");
console.log("----------------------");


console.log("-- التكليف 01 --");
console.log("----------------------");

let start = 10;
let end = 100;
let exclude = 40;

for (; start <= end; start += 10){
    if (start === exclude) continue;
    console.log(start);
}

/* Output
    10
    20
    30
    50
    60
    70
    80
    90
    100
*/

console.log("----------------------");
console.log("-- التكليف 02 --");
console.log("----------------------");

let ten = 10;
let zero = 0;
let stop = 3;
for (let i = ten; i >= stop; i--) {
    if (i === ten) {
        console.log(`${i}`);
    }
    else {
        console.log(`${zero}${i}`);
    }
}

/* Output
    10
    09
    08
    07
    06
    05
    04
    03
*/ 

console.log("----------------------");
console.log("-- التكليف 03 --");
console.log("----------------------");
let indexer = 1
let theEnd = 6;
let breaker = 2

for (let i = indexer; i <= theEnd; i++){

    console.log(i);
    
    for (let j = breaker; j <= theEnd; j += breaker) {
        console.log(`-- ${j}`);
        if (j - breaker) {
            break;
        }
    }
}
/**
 * لازم نعرف متغيرات يتم تخزين القيم الجديدة فيها
 * زي  i , j
 */

/* Output
    1
    -- 2
    -- 4
    2
    -- 2
    -- 4
    3
    -- 2
    -- 4
    4
    -- 2
    -- 4
    5
    -- 2
    -- 4
    6
    -- 2
    -- 4
*/
console.log("----------------------");
console.log("-- التكليف 04 --");
console.log("----------------------");
let indexing = 10;
let jump = 2;

for (;;) {
    console.log(`${indexing}`);
    indexing -= jump;
    if (indexing === jump) break;
}

/* Output
    10
    8
    6
    4
*/

console.log("----------------------");
console.log("-- التكليف 05 --");
console.log("----------------------");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 1; i < friends.length; i++){
    
    if (letter.toUpperCase() === friends[i][0]) {
        friends.shift();
    }
    console.log(`"${i}=> ${friends[i]}"`);
}

/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/

console.log("----------------------");
console.log("-- التكليف 06 --");
console.log("----------------------");

let s = 0;
let swappedName = "elZerO";
let result = "";

for (; s < swappedName.length; s++) {
    let char = swappedName[s];
    if (char === char.toUpperCase()) {

        result += char.toLowerCase();
    } else {

        result += char.toUpperCase();

    }
}

console.log(result); // Output: "ELzERo"

console.log("----------------------");
console.log("-- التكليف 07 --");
console.log("----------------------");

let st = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let num = [];
for (; st < mix.length; st++) {
    if (typeof mix[st] === "number") {
        num.push(mix[st]);
        for (; st < num.length; st++) {
            if (mix[st] === st) {
                continue;
            }
        }
    
    }
    
}
console.log(num); 

/*Output
2
3
4
*/
/*
    Array Challenge
*/

console.log("---------------------");
console.log("-- Array Challenge --");
console.log("---------------------");