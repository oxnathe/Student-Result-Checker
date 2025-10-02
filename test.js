//A function to calculate the grade and remark according to each score
const calculateGrade = (score) => {
  let grade = "";
  let remark = "";

  if (score >= 70 && score <= 100) {
    grade = "A";
    remark = "Excellent";
  } else if (score >= 60 && score < 70) {
    grade = "B";
    remark = "Very Good";
  } else if (score >= 50 && score < 60) {
    grade = "C";
    remark = "Good";
  } else if (score >= 45 && score < 50) {
    grade = "D";
    remark = "Fair";
  } else if (score >= 40 && score < 45) {
    grade = "E";
    remark = "Poor";
  } else {
    grade = "F";
    remark = "Fail";
  }

  return `${grade} (${remark})`;
};

//Sample list of courses offered by a particular student
const courseDetails = [
  { courseName: "Introduction to Algorithms", score: 90 },
  { courseName: "Object Oriented Programming", score: 78 },
  { courseName: "Data Science", score: 87 },
  { courseName: "Logic and Database Management", score: 75 },
  { courseName: "Software Engineering", score: 50 },
];

//Function to display student's result
const displayResults = (courseDetails) => {
  let totalScore = 0;

  //Output line to display the number of courses offered by each student
  console.log(`\nNumber of courses offered: ${courseDetails.length}\n`);

  for (let count = 0; count < courseDetails.length; count++) {
    console.log(
      `${courseDetails[count].courseName}, ${
        courseDetails[count].score
      }, ${calculateGrade(courseDetails[count].score)}`
    );
    totalScore += courseDetails[count].score;
  }

  let averageScore = totalScore / courseDetails.length;
  console.log(`\nAverage score = ${averageScore}\n`);

  if (averageScore > 60) return `Comment: Proceed to the next semester`;
  else return "Comment: To repeat the semester";
};

console.log(displayResults(courseDetails));
