function solution(s) {
  if (s === "" || s === "-" || s === "+") return NaN;

  const isNegative = s[0] === "-";
  const isSign = s[0] === "-" || s[0] === "+";

  const digitList = [...s.slice(isSign ? 1 : 0)].map((char) => {
    const digit = char.charCodeAt(0) - "0".charCodeAt(0);
    return digit >= 0 && digit <= 9 ? digit : NaN;
  });

  const result = digitList.reduce((acc, curr, index, array) => {
    if (Number.isNaN(curr)) {
      array.splice(1);
      return NaN;
    }
    return acc * 10 + curr;
  }, 0);

  return isNegative ? -result : result;
}

// 테스트
console.log(solution("1234")); // 1234
console.log(solution("+1234")); // 1234
console.log(solution("-1234")); // -1234
console.log(solution("12a34")); // NaN
console.log(solution("1.23")); // NaN
console.log(solution("-1.23")); // NaN
console.log(solution("-")); // NaN
console.log(solution("+")); // NaN
console.log(solution("")); // NaN
