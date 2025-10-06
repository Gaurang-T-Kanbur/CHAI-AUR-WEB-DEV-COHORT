// Problem: Create an object representing a type of tea with properties for name, type and caffeine content
const teas = {
  name: "Lemon tea",
  type: "Green",
  caffeine: "low",
};

// Problem: Access and print the name and type properties of the tea object
console.log(`Name of tea is ${teas.name} and its type is ${teas.type}.`);


// Problem: Add a new property origin to the tea object
teas.origin = "Assam";
teas["tea origin"] = "China"
console.log(teas);


// Problem: Change the caffeine level of the tea object to "Medium"
teas["caffeine level"] = "Medium"
console.log(teas);


// Problem: Remove the type property from the tea object
delete teas.type


// Problem: Check if the tea object has a property origin
console.log(teas.hasOwnProperty("origin"));
console.log(teas.hasOwnProperty("tea origin"));

// Problem: Use a for...in loop to print all properties of the tea object
for(pros in teas){
  console.log(pros);
  
}

// Problem: Create a nested object representing different types of teas and their properties
let TypeTea = {
  "New Lemon Tea": { 
  name: "New Lemon tea",
  type: "Green",
  caffeine: "low",
},

  "Masala Tea": { 
  name: "Masala tea",
  type: "Masala",
  caffeine: "high",
},

  "Iced Honey Lemon Tea": { 
  name: "Iced tea",
  type: "Honey",
  caffeine: "Very low",
}
}

// Problem: Create a copy of the tea object
let newTea = JSON.stringify(teas);
console.log(typeof(newTea));
newTea = JSON.parse(newTea)
console.log(newTea);
console.log(typeof(newTea));





// Problem: Add a custom method describe to the tea object that returns a description string
teas.describe = function(){
  return `This is ${teas.name}, it is originated from ${teas.origin} and has ${teas["caffeine level"]} caffeine level.`

}

console.log(teas.describe());
 

// Problem: Merge two objects representing different teas into one
newTea = Object.assign(newTea, TypeTea, teas)

console.log(newTea);
newTea = {...teas, ...TypeTea}
console.log(newTea);



