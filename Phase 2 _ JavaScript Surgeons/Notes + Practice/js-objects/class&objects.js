class Person {
    constructor(fname, lname){
        this.first = fname;
        this.last = lname;

    }

    getfullname = function(){
        return `${this.first} ${this.last}`
    }
}

let p1 = new Person("Gaurang", "Kanbur");
console.log(p1.getfullname());

let obj1 = {
    fname: "GTK",
    lname: "GK",
    getfullname: function(){
        return `${this.fname} ${this.lname}`
    }
}

let obj2 = {
    fname: "GK",
    lname: "GTK",
    getfulllname: function(){
        return `${this.lname} ${this.fname}`
    }
}

obj1.__proto__ = obj2 //Playing with prototypes, do not play with them.

console.log(obj1.getfullname());
