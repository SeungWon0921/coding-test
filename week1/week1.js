/**
 * !문자열 s를 숫자로 변환하기 
 * ? 조건 
 * - s의 길이는 1이상 5이하 
 * - s의 맨 앞에는 부호가 올 수 있음 
 * - s는 부호와 숫자로만 이루어져 있음 
 * - s는 0으로 시작하지 않음 
 * - 소수를 받았을 때 => nan
 * - 문자열을 받았을때 => nan
 * - parseInt, Number 사용 x 
 */

function strToInt(s){
    if(s.length<=5 && s.length>=1){
        if(s.includes('.')){
            //소수인지 판별
            return NaN
        }else{
            let num = +s;
            return num;
        }
    }else{
        return '잘못된 입력'
    }
}

console.log(strToInt('-123'));
console.log(strToInt('안녕'));
console.log(strToInt('123'));
console.log(strToInt('2.45'));
