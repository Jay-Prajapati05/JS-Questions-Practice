
/* Q20. Take a student's marks (0–100) and category (`"general"` or `"reserved"`):

- If marks >= 90 → A grade
  - If category is `"general"` → Full scholarship
  - Else → Full scholarship + ₹5000 bonus
- If marks 75–89 → B grade
  - If category is `"general"` → 50% scholarship
  - Else → 75% scholarship
- If marks 60–74 → C grade → No scholarship
- Below 60 → Fail → No scholarship

Print grade and scholarship status.
*/
function scholarshipSystem(marks, category) {
  category = category.toLowerCase();

  if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
    return;
  }

  if (category !== "general" && category !== "reserved") {
    console.log("Invalid category");
    return;
  }

  if (marks >= 90) {
    console.log("Grade: A");

    if (category === "general") {
      console.log("Full scholarship");
    } else {
      console.log("Full scholarship + ₹5000 bonus");
    }

  } else if (marks >= 75) {
    console.log("Grade: B");

    if (category === "general") {
      console.log("50% scholarship");
    } else {
      console.log("75% scholarship");
    }

  } else if (marks >= 60) {
    console.log("Grade: C");
    console.log("No scholarship");

  } else {
    console.log("Fail");
    console.log("No scholarship");
  }
}

scholarshipSystem(95, "general");
// Grade: A
// Full scholarship

scholarshipSystem(95, "reserved");
// Grade: A
// Full scholarship + ₹5000 bonus

scholarshipSystem(80, "general");
// Grade: B
// 50% scholarship

scholarshipSystem(80, "reserved");
// Grade: B
// 75% scholarship

scholarshipSystem(60, "general");
// Grade: C
// No scholarship

scholarshipSystem(59, "reserved");
// Fail
// No scholarship

scholarshipSystem(100, "general");
// Grade: A
// Full scholarship

scholarshipSystem(-5, "general");
// Invalid marks

scholarshipSystem(90, "student");
// Invalid category