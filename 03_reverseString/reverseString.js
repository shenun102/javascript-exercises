const reverseString = function (word) {
  // Initial solution, very long
  // let reverseWord = "";
  // for (let i = word.length - 1; i >= 0; i--) {
  //   reverseWord += word[i];
  // }
  // return reverseWord;
  return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
