function ticketPrice(age, isWeekend) {
  let price;

  if (age < 0) {
    console.log("Invalid age");
  } else {
    if (age < 3) {
      console.log("Free");
      return;
    } else if (age <= 12) {
      price = 200;
    } else if (age <= 59) {
      price = 500;
    } else {
      price = 300;
    }

    // Weekend surcharge for paid tickets
    if (isWeekend) {
      price = price + 100;
    }

    console.log("Ticket Price: ₹" + price);
  }
}

ticketPrice(2, false);    // Free
ticketPrice(3, false);    // ₹200
ticketPrice(12, true);    // ₹300
ticketPrice(13, false);   // ₹500
ticketPrice(59, true);    // ₹600
ticketPrice(60, false);   // ₹300
ticketPrice(60, true);    // ₹400
ticketPrice(-5, false);   // Invalid age