// 문자가 숫자인지 확인하고 숫자 값으로 변환하는 함수
function charToDigit(char) {
  if (char >= "0" && char <= "9") {
    return char.charCodeAt(0) - "0".charCodeAt(0);
  } else {
    // 숫자가 아닌 경우 특별한 값을 반환 (예: null)
    return null;
  }
}

// 문자열을 정수로 변환하는 함수
function customParseInt(str) {
  let result = 0;
  let isNegative = false;
  let startIndex = 0;

  if (str.length === 0) {
    return null;
  }

  if (str[0] === "-") {
    isNegative = true;
    startIndex = 1;
  }

  for (let i = startIndex; i < str.length; i++) {
    const digit = charToDigit(str[i]);
    if (digit === null) {
      // 숫자가 아닌 문자를 만난 경우
      return null;
    }
    result = result * 10 + digit;
  }

  if (isNegative) {
    result = -result;
  }

  return result;
}

// 예제 사용
console.log(customParseInt("123")); // 출력: 123
console.log(customParseInt("-123")); // 출력: -123
console.log(customParseInt("0")); // 출력: 0
console.log(customParseInt("123.456")); // 출력: null
console.log(customParseInt("abc")); // 출력: null
