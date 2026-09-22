// Q14. Given an array of objects representing students with `name` and `score`, write a function that returns the student with the highest score.
function getHighestScoreStudent(students) {
  let highestStudent = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i].score > highestStudent.score) {
      highestStudent = students[i];
    }
  }

  return highestStudent;
}

const students = [
  {
    name: "Rahul",
    score: 78,
  },
  {
    name: "Amit",
    score: 92,
  },
  {
    name: "Neha",
    score: 85,
  },
  {
    name: "Priya",
    score: 88,
  },
];

console.log(getHighestScoreStudent(students));
