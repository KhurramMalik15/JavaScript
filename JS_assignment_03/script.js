let score = parseInt(prompt("Enter the student's score: "));

let grade;

if (score >= 90) {
    grade = "A+";
    alert("You are Passed in A+ Grade");
}
 else if (score >= 80) {
    grade = "A";
    alert("You are Passed in A Grade");
}
 else if (score >= 70) {
    grade = "B";
    alert("You are Passed in B Grade");
}
 else if (score >= 60) {
    grade = "C";
    alert("You are Passed in C Grade");
}
 else if (score >= 50) {
    grade = "D";
    alert("You are Passed in D Grade");
} 
else if (score >= 40) {
    grade = "E";
    alert("You are Passed in E Grade");
}
else {
    grade = "F";
    alert("You are Fail");
}

// Print the result
console.log("The student grade is:", grade);
