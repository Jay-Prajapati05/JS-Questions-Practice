// Q10. Implement a function toDegrees(radians) and toRadians(degrees) for angle conversion. Then compute sin, cos, and tan of 30°, 45°, and 60°.

function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

const angles = [30, 45, 60];

for (let i = 0; i < angles.length; i++) {
  const degrees = angles[i];
  const radians = toRadians(degrees);

  console.log("Angle:", degrees);
  console.log("Radians:", radians);
  console.log("Sin:", Math.sin(radians));
  console.log("Cos:", Math.cos(radians));
  console.log("Tan:", Math.tan(radians));
}
