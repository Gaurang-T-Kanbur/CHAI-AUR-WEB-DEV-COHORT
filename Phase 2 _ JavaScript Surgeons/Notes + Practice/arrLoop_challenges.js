// Problem: Create an array containing different types of teas
const teas = [
  "Green tea",
  "Black tea",
  "Oolong tea",
  "White tea",
  "Herbal Tea",
];

console.log(teas);


// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");

// Problem: Remove "Oolong Tea" from the list of teas

let index = teas.indexOf("Oolong tea");

if(index > -1){
    teas.splice(index, 1) //splice, interesting array method
}
console.log(teas);



// Problem: Filter the list to only include teas that are caffeinated
 //Herbal Tea is not caffeinated

let caffeinatedTeas = teas.filter((tea) => tea != "Herbal Tea")
console.log(caffeinatedTeas);


// Problem: Sort the list of teas in alphabetical order
let sortteas = teas.sort();
console.log(sortteas);



// Problem: Use a for loop to print each type of tea in the array
for(let i=0; i<teas.length;i++){
    console.log(teas[i]);
    
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")
let count = 0
for (let i = 0; i < teas.length; i++) {
    if(teas[i] != "Herbal Tea"){
        count++;
    }
    
}

console.log(count);

// Problem: Use a for loop to create a new array with all tea names in uppercase
let uptea = [];
for (let i = 0; i < teas.length; i++) {
    uptea.push(teas[i].toUpperCase());
    
}
console.log(uptea);


// Problem: Use a for loop to find the tea name with the most characters
let largest = ""
for (let i = 0; i < teas.length; i++) {
    if(teas[i].length > largest.length){
        largest = teas[i];
    }
   
    
}
console.log(largest);



// Problem: Use a for loop to reverse the order of the teas in the array
let newteas = [
  "Green tea",
  "Black tea",
  "Oolong tea",
  "White tea",
  "Herbal Tea",
];
let j = newteas.length - 1;
for (let i = 0; i < (newteas.length) / 2; i++) {
    let temp = newteas[i];
    newteas[i] = newteas[j];
    newteas[j] = temp

    j--;
    
    
}
console.log(newteas);
