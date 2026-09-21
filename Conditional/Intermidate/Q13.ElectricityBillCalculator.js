function calculateBill(units) {
  let bill = 0;

  if (units < 0) {
    console.log("Invalid units");
  } else if (units <= 100) {
    bill = units * 1.50;
    console.log("Bill: ₹" + bill);
  } else if (units <= 300) {
    bill = (100 * 1.50) + ((units - 100) * 2.50);
    console.log("Bill: ₹" + bill);
  } else if (units <= 500) {
    bill = (100 * 1.50) +
           (200 * 2.50) +
           ((units - 300) * 4.00);

    console.log("Bill: ₹" + bill);
  } else {
    bill = (100 * 1.50) +
           (200 * 2.50) +
           (200 * 4.00) +
           ((units - 500) * 5.00);

    console.log("Bill: ₹" + bill);
  }
}

calculateBill(0);    // ₹0
calculateBill(100);  // ₹150
calculateBill(101);  // ₹152.5
calculateBill(300);  // ₹650
calculateBill(301);  // ₹654
calculateBill(500);  // ₹1450
calculateBill(501);  // ₹1455
calculateBill(-10);  // Invalid units