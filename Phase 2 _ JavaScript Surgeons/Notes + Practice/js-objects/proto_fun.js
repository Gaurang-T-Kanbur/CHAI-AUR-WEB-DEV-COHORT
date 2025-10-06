Function.prototype.describe = function(myname){ //creating a new function in proto of class Function
    console.log(`Function name is ${this.name} and my name is ${myname}`);
    
}

function greet(name){
    return `Hello ${name}`
}

greet.describe("GTK");
greet("GK")

function explain(subject){
    let practical = subject + " practical"
    let theory = subject + " theory";
    console.log(practical);
    

    return theory;
}

let theory  = explain("Web Dev");
console.log(theory); //I only can acces the returned value of a function but not its elements or variables

//But...

function createSubject(){ 

    let subject = "Web Dev"
return function(){
    let practical = subject + " practical"
    let theory = subject + " theory";
    console.log(practical);
    

    return theory;
}

}

let subject = createSubject(); //Ideally the execution should end here and the function is removed from stack memory
console.log(subject);//But this will have access to the variable subject even though function is out of stack
console.log(subject()); //This is called a tiffin box concept or even a closure

//So inner function will have access to all the variables of the parent function and it will hold onto it even when the parent function is executed and is removed from the stack memory.

 //Iffy function:
 (function(){
    console.log("GTK");
    
 })()


