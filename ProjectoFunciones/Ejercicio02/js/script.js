// Exercise #1
// We'll build the industry plant calendar from the opening exercise.

// Part 1
// First, build a function called "businessHours". Similar to the day of the week class exercise,
//  this function should accept two parameters: dayNumber and hourNumber.

// By reading the dayNumber and the hourNumber, your program should print whether it is business
//  hours or not. It should return true if it is business hours, and false if not.

// function businessHours(dayNumber, hourNumber)

// Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).

// function businessHours(dayNumber, hourNumber) {
//   let businessHours;
//   if (hourNumber >= 9 && hourNumber <= 18 && dayNumber >= 1 && dayNumber <= 5) {
//     businessHours = true;
//   } else {
//     businessHours = false;
//   }
//   return businessHours;
// }

// Part 2
// Now, create the function getDayNumber.

// It should accept two parameters: janFirstDayNumber and yearDayNumber.

// The yearDayNumber will be an int ranging from 0 to 365.

// janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

// Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

// Hint: use the remainder operator (%), dividing your yearDayNumber by 7.

// function getDayNumber(janFirstDayNumber, yearDayNumber) {
//   let weekDay = (yearDayNumber + (janFirstDayNumber - 1)) % 7;
//   return weekDay;
// }

// console.log(getDayNumber(0, 35));

// Part 3
// Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.

// function businessHoursComplete(yearDayNumber, hourNumber) {
//   let businessHours;
//   let dayWeek = getDayNumber(0, yearDayNumber);
//   if (hourNumber >= 9 && hourNumber <= 18 && dayWeek >= 1 && dayWeek <= 5) {
//     businessHours = true;
//   } else {
//     businessHours = false;
//   }
//   return businessHours;
// }

// console.log(businessHoursComplete(35, 13));

// function businessHours2(yearDayNumber, hourNumber){
//     let today = new Date();
//     Establecer día 1 y solo para el mes 0
//     today.setDate(1);
//     today.setMonth(0);

//     let weekDay = getDayNumber(yearDayNumber, today.getDay());
//     return businessHours(weekDay, hourNumber)
// }

// console.log(businessHours2(14, 17));

//* Fórmula General



function formula(a, b, c) {
  return (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
}

console.log(formula(1, -4, 3));
console.log(formula(1, 3, -10));
console.log(formula(4, 8, -12));
console.log(formula(1, -5, 6));
console.log(formula(2, -14, 24));
