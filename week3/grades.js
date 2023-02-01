let grades =
  "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

let splitGrades = grades.split(", ");
console.log("The array is", splitGrades);
console.log("The array length is", splitGrades.length);

let scores = [];
for (let i = 0; i < splitGrades.length; i++) {
  //   let scoreStr = splitGrades[i].slice(-2);
  //   let scoreInt = parseInt(scoreStr);

  let splitScore = splitGrades[i].split("|");

  //index 0 holds our string names and index 1 holds our number strings, which we then convert into numbers with parseInt.
  let names = splitScore[0];
  let score = parseInt(splitScore[1]);

  let capitalizedName = names.charAt(0).toUpperCase() + names.slice(1);

  console.log(capitalizedName, "-", score);
  scores.push(score);
}
console.log(scores);
