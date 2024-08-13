const palindromes = function (str) {
  const alphanumbers = "abcdefghijklmnopqrstuvwxyz123456790";
  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter((letter) => alphanumbers.includes(letter));

  const finalStr = cleanStr.join("");
  const reverseStr = cleanStr.reverse().join("");

  if (finalStr === reverseStr) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
