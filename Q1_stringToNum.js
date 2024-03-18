function solution(str) {
  const strToNum = +str;
  if (!isPrime(strToNum)) {
    return strToNum;
  }
  return NaN;
}
function isPrime(num) {
  for (let i = 0; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(solution("-12.34"));
