function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }

  return ans;
}
const A = sum(100);

console.log(A);
