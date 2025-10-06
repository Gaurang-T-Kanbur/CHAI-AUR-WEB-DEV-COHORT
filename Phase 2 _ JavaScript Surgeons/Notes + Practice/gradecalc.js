function calculateGrade(marks) {
    if(marks >= 90){
        return "A";
    } else if(marks >= 80 && marks < 90){
         return "B"
    } else if(marks >= 70 && marks < 80){
         return "B"
    } else if(marks >= 60 && marks < 70){
         return "B"
    } else {
        return "F"
    }
}

console.log(`Grade is ${calculateGrade(99)}`);