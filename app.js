import express from "express";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); 


function getGrade(score) {
  if (score >= 70) return "A";
  else if (score >= 60) return "B";
  else if (score >= 50) return "C";
  else if (score >= 45) return "D";
  else return "F";
}

function getGPA(courses) {
  const points = { A: 5, B: 4, C: 3, D: 2, F: 0 };
  const totalPoints = courses.reduce((sum, c) => sum + points[c.grade], 0);
  return (totalPoints / courses.length).toFixed(2);
}

app.get("/", (req, res) => {
  res.render("index", { student: null, courses: null, message: null, summary: null });
});


app.post("/check", async (req, res) => {
  const matNo = req.body.matNo.trim().toLowerCase();

  try {
    const data = await readFile(path.join(__dirname, "results.json"), "utf8");
    const students = JSON.parse(data);

    const student = students.find(
      std => std.studentMatricNo.toLowerCase() === matNo
    );

    if (!student) {
      return res.render("index", { 
        student: null, 
        courses: null, 
        message: "Student not found!",
        summary: null });
    }

    const courses = student.courseDetails.map(course => ({
      ...course,
      grade: getGrade(course.score)
    }));

    const totalScore = courses.reduce((sum, c) => sum + c.score, 0);
    const avgScore = (totalScore / courses.length).toFixed(2);
    const gpa = getGPA(courses);

    const summary = { totalScore, avgScore, gpa };

    res.render("index", { student, courses, message: null, summary });
  } catch (err) {
    console.error(err);
    res.send("Error reading student data");
  }
});


app.listen(port, () => {
  console.log(`this Server is running at http://localhost:${port}`)
})