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

const displayResults = (courseDetails) => {
  let totalScore = 0;

  for (let course of courseDetails) {
    totalScore += course.score;
  }

  let averageScore = totalScore / courseDetails.length;

  // Decide comment
  let comment =
    averageScore > 60
      ? "Proceed to the next semester"
      : "Repeat the semester";


  return {
    totalScore,
    average: averageScore,
    finalGrade: calculateGrade(averageScore),
    comment
  };
};

// Export
export { calculateGrade, displayResults };
