// 문자열 연습하기
function solution(s) {
  let str = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (str[i] === "p") count++;
    if (str[i] === "y") count--;
  }
  console.log(count);

  return count === 0 ? true : false;
}

// 반복문, 조건문 연습하기
function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
