// while
// while (조건) {
//     // 메인로직
//     // 증감
// }

let i = 0;
while (i < 10) {
  console.log(i); // 0 ~ 9
  i++;
}

// while문을 활용해서, 3초과 100미만의 숫자 중 5의 배수를 찾기
let j = 3;
while (j < 100) {
  if (j % 5 === 0 && j >= 5) {
    console.log(j);
  }
  j++;
}

// do ~ while
let z = 0;
do {
  console.log(z);
  z++;
} while (z < 10);

// break문, continue문
for (let num = 0; num <= 10; num++) {
  if (num === 5) {
    // break; // 그 순서에서 끝내버린다
    continue; // 그 다움순서로 넘어간다
  }
  console.log(num);
}
