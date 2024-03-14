const solution = (str) => {
  if (str === "" || str === "-" || str === "+") return NaN;

  const isNegative = str[0] === "-";
  const isSign = str[0] === "-" || str[0] === "+";

  const digits = [...str.slice(isSign ? 1 : 0)].map((char) => {
    const code = char.charCodeAt(0) - "0".charCodeAt(0);
    return code >= 0 && code <= 9 ? code : NaN;
  });

  const result = digits.reduce((acc, curr, index, array) => {
    if (isNaN(curr)) {
      array.splice(1);
      return NaN;
    }
    return acc * 10 + curr;
  }, 0);

  return isNegative ? -result : result;
};

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
