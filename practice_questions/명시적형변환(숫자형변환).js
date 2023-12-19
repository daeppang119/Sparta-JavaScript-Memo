// 문자열을 입력받아도 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// if문과 typeof 키워드를 이용해야 합니다.

function add(a, b) {
  // (1) a가 문자열로 들어온 경우 변환
  let numberA = 0;
  if (typeof a === "string") {
    numberA = Number(a);
  } else if (typeof a === "number") {
    numberA = a;
  } else {
    //이상한 거
    console.log("오류입니다.");
  }

  let numberB = 0;
  if (b.typeof !== Number) {
    numberB = Number(b);
  }

  return numberA + numberB;
}

const result1 = add(5, "5");
const result2 = add("5", 5);

console.log(result1); // 출력 결과: 10
console.log(result2); // 출력 결과: 10
