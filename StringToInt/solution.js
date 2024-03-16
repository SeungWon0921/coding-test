function solution(s) {
  var answer = 0;
  let signal = 1;
  let i = 0;
  if (s[i] == '+' || s[i] == '-') {
    if (s[i] == '-')
      signal = -1;
    i++;
  }
  while (i < s.length) {
    if (!(48 <= s[i].charCodeAt(0) && s[i].charCodeAt(0) <= 58)) {
      return "NAN";
    }
    answer = answer * 10 + (s[i].charCodeAt(0) - 48);
    i++;
  }
  return answer * signal;
}