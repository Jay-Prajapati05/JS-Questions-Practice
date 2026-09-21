function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    console.log("Invalid input");
    return;
  }

  let bmi = weight / (height * height);

  console.log("BMI:", bmi.toFixed(2));

  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi < 25) {
    console.log("Normal");
  } else if (bmi < 30) {
    console.log("Overweight");
  } else {
    console.log("Obese");
  }
}

calculateBMI(50, 1.70); // Underweight
calculateBMI(65, 1.70); // Normal
calculateBMI(80, 1.70); // Overweight
calculateBMI(100, 1.70); // Obese

calculateBMI(0, 1.7);   // Invalid input
calculateBMI(60, 0);    // Invalid input
calculateBMI(-60, 1.7); // Invalid input