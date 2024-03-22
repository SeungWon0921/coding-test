function solution(s) {
  if (s === "" || s === "-" || s === "+") return NaN;

  const isNegative = s[0] === "-";
  const isSign = s[0] === "-" || s[0] === "+";

  const result = [...s.slice(isSign ? 1 : 0)].reduce(
    (acc, curr, index, array) => {
      const digit = curr.charCodeAt(0) - "0".charCodeAt(0);
      if (digit >= 0 && digit <= 9) {
        return acc * 10 + digit;
      }

      array.splice(1);
      return NaN;
    },
    0
  );

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
