

//Let's create a polyfill for forEach named myForEach
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        let originalArr = this;

        for(let i=0;i < originalArr.length;i++){
            userFn(originalArr[i], i, originalArr);
        }

    }
}

let myArr = [1,2,3,4,5]
myArr.forEach((value, index)=> {
    console.log(`The value is ${value} and its index is ${index}.`);
})

console.log(myArr);

myArr.myForEach((value, index) => {
    console.log(`The myvalue is ${value} and its myindex is ${index}.`);
})


//Let's create a polyfill for map named myMap

Array.prototype.myMap = function(userFn){
    let resultArr = [];
    for(let i=0;i<this.length;i++){
        resultArr.push(userFn(this[i], i, this));
    }
    return resultArr;
}

let mymapArr = [2,3,4,5,6,7];
let n1 = mymapArr.map((e)=>e*2);
let n2 = mymapArr.myMap((e)=>e*3);
console.log(n1);
console.log(n2);

//Let's create a polyfill for push named myPush
Array.prototype.myPush = function(value){
    let origArr = this //it is exactly same a using just this, but increases one more hop.
    origArr[origArr.length] = value; 
    return origArr.length //push returns this.length, hence myPush will return the same.

}

//Let's create a polyfill for filter named myFilter
Array.prototype.myFilter = function(userFn){
    let resultArr = [];
    for(let i=0;i<this.length;i++){
        if(userFn(this[i], i, this)){
            resultArr.myPush(this[i]);
        }
    }

    return resultArr
}

let myFilArr = [1,2,3,4,5,6,7,8,9];
myFilArr.myPush(10)

let fil1 = myFilArr.filter(num => num%2 == 0);
let fil2 = myFilArr.myFilter(num => num%2 != 0);
console.log(fil1);
console.log(fil2);


//Let's create a polyfill for slice named mySlice
if(!Array.prototype.mySlice){
    Array.prototype.mySlice = function(start=0, end = this.length){

       let resultArr = [];
       
       // handle negative start
       if(start < 0){
        start = this.length + start;
        
        if(start < 0) start = 0; // clamp start to 0
       }

        // clamp end to array length
       if(end > this.length){
        end = this.length;
       }
       // handle negative end
       if(end < 0){
        end = this.length  + end

       }

        // main loop (exclusive end)
        for(let i = start; i < end; i++){
            resultArr.myPush(this[i]);
        
       }

        return resultArr;

    }
}

let mySliArr = [1,2,3,4,5,6,7,8,9]

let sli1 = mySliArr.slice(0, -1)
let sli2 = mySliArr.mySlice(0, -1)
console.log(sli1);
console.log(sli2);

console.log(mySliArr.slice(2, 5));   // [3,4,5]
console.log(mySliArr.mySlice(2, 5)); // [3,4,5]

console.log(mySliArr.slice(-3));   // [7,8,9]
console.log(mySliArr.mySlice(-3)); // [7,8,9]

console.log(mySliArr.slice());   // full copy
console.log(mySliArr.mySlice()); // full copy





