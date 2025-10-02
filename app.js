import express from "express";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { calculateGrade, displayResults } from "./test.js";

const app = express();
const PORT =  3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index", { message: null });
});

app.post("/check", async (req, res) => {
  const matricNo = (req.body.matricNo || "").trim();

  if (!matricNo) {
    return res.render("index", { message: "Please enter a matric number" });
  }

  try {
    const raw = await readFile(path.join(__dirname, "results.json"), "utf8");
    const students = JSON.parse(raw);

    const student = students.find(
      (s) => (s.studentMatricNo || "").toLowerCase() === matricNo.toLowerCase()
    );

    if (!student) {
      return res.render("index", { message: "Student not found" });
    }

    const courses = student.courseDetails.map((c) => ({
      ...c,
      grade: calculateGrade(c.score),
    }));

    const summary = displayResults(student.courseDetails);

    res.render("result", { student, courses, summary });
  } catch (err) {
    console.error("Error reading results.json:", err.message);
    res.render("index", { message: "Server error. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`This server is running at http://localhost:${PORT}`);
});
