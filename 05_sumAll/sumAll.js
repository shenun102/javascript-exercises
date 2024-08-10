const sumAll = function (num1, num2) {
  let sum = 0;
  let currNum;

  // If there is a non-integer return "ERROR"
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  // If there is a negative number return "ERROR"
  if (num1 < 0 || num2 < 0) return "ERROR";
  // if num1 is bigger than num2, swap the values
  if (num1 > num2) [num1, num2] = [num2, num1];

  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
