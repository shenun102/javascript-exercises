const removeFromArray = function (arr, ...args) {
  // Create new array to be returned
  const newArr = [];
  // For each element in arr
  arr.forEach((arg) => {
    // if the element is not in args array, then push the current element into a new array
    if (!args.includes(arg)) newArr.push(arg);
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
