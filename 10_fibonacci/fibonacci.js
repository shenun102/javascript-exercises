const fibonacci = function (n) {
  n = +n;
  if (n === 0) return 0;
  if (n < 0) return "OOPS";
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
// F(n)=F(n−1)+F(n−2)

// Do not edit below this line
module.exports = fibonacci;
