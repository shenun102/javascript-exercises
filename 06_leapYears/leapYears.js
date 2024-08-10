const leapYears = function (year) {
  const diviBy4 = year % 4 === 0;
  const diviBy100 = year % 100 === 0;
  const diviBy400 = year % 400 === 0;

  // If false && !(false or false)

  if (diviBy400) {
    return true;
  } else if (diviBy100) {
    return false;
  } else if (diviBy4) {
    return true;
  } else return false;

  // A simpler method would be using short circuit evaluation
  // return (diviBy400) || (!diviBy100 && diviBy4)
};
// Do not edit below this line
module.exports = leapYears;
