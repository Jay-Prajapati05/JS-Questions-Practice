
/*Q19. Calculate income tax based on slabs:

- Up to ₹2,50,000 → No tax
- ₹2,50,001–₹5,00,000 → 5%
- ₹5,00,001–₹10,00,000 → 20%
- Above ₹10,00,000 → 30%

Also apply a 4% health & education cess on the calculated tax. Print the total tax payable.
*/

function calculateTax(income) {
  let tax = 0;

  if (income < 0) {
    console.log("Invalid income");
    return;
  }

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax =
      (250000 * 0.05) +
      ((income - 500000) * 0.20);
  } else {
    tax =
      (250000 * 0.05) +
      (500000 * 0.20) +
      ((income - 1000000) * 0.30);
  }

  // 4% health & education cess
  let cess = tax * 0.04;
  let totalTax = tax + cess;

  console.log("Tax: ₹" + tax);
  console.log("Cess: ₹" + cess);
  console.log("Total Tax Payable: ₹" + totalTax);
}

calculateTax(200000);   // No tax
calculateTax(250000);   // No tax
calculateTax(300000);   // Tax + 4% cess
calculateTax(500000);   // Tax + 4% cess
calculateTax(1000000);  // Tax + 4% cess
calculateTax(1200000);  // Tax + 4% cess
calculateTax(-5000);    // Invalid income