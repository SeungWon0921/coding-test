function Q1(str) {
  const strToNum = +str;
  if (Number.isInteger(strToNum)) {
    return strToNum;
  }
  return NaN;
}
console.log(Q1("-12234"));
