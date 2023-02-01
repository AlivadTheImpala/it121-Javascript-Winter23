let grades =
  "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

//takes each value in grades string that's separated by a comma and a space, and assign it its own index in an array
let splitGrades = grades.split(", ");
console.log("The array is", splitGrades);
console.log("The array length is", splitGrades.length);

//create new arrays that will hold just the scores and names.
const scores = [];
const names = [];

//create arrays that hold elements separated by the "|" character.
for (let i = 0; i < splitGrades.length; i++) {
  //   let scoreStr = splitGrades[i].slice(-2);
  //   let scoreInt = parseInt(scoreStr);

  let splitScore = splitGrades[i].split("|");
  console.log(splitScore);

  //index 0 holds our string studentName and index 1 holds our number strings, which we then convert into numbers with parseInt.
  let studentName = splitScore[0];
  let studentScore = parseInt(splitScore[1]);

  //capitalizes the letter at index 0 in each studentName and concatenate it with the rest of the letters in the name
  let capitalizedName =
    studentName.charAt(0).toUpperCase() + studentName.slice(1);

  document.write(capitalizedName, " - ", studentScore, "<br>");
  //add the values from studentScore and studentName into their corresponding arrays.
  scores.push(studentScore);
  names.push(studentName);
}

// Show the total number of students from the names array
let totalStudents = names.length;
document.write("<b>Total Students:</b> ", totalStudents, "<br>");

//calculate the sum of all numbers in the scores Array
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
  console.log(sum);
}
document.write("The total sum of all scores is ", sum, " points.<br>");

let avg = 0;
for (let i = 0; i < scores.length; i++) {
  avg = sum / scores.length;
}
document.write("<b>Average Score:</b>  ", avg, " points<br>");

let lowestScore = scores[0];
let highestScore = scores[0];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < lowestScore) {
    lowestScore = scores[i];
  }
  if (scores[i] > highestScore) {
    highestScore = scores[i];
  }
}

document.write("<b>Lowest Score:</b> ", lowestScore, "<br>");
document.write("<b>Highest Score:</b> ", highestScore, "<br>");
