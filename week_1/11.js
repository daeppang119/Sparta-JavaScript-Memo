// 조건문(if, else if, else, switch)

// 1. if문
let x = 10;

// if(true 또는 false가 나올 수 있는 조건) {
//     mian logic 실행
// }

// 1-1
if (x > 0) {
    console.log('x는 양수입니다.'); // x는 양수입니다
}

if (x < 0) {
    console.log('x는 양수입니다.'); // 실행이 안된다
}

// 1-2
let y = "hello world";

// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력
if (y.length >= 5) {
    console.log(y.length); // 11
}

// 2. if - else문
// if () {
//     mian logic #1 (ture일 경우 실행)
// } else {
//     mian logic #2 (flase일 경우 실행)
// }

let z = -3;
if (z > 0) {
    console.log('x는 양수입니다.');
} else {
    console.log('x는 음수입니다.'); // 실행
}

// 3. if - else if - else문
// if(조건) {
//     //  main logic #1
// } else if(조건) {
//     //  main logic #2
// } else {
//     //  main logic #3
// }

let o = 5;
if (o < 0) {
    console.log('1');
} else if (o >= 0 && o < 10) {
    console.log('2');
} else {
    console.log('3');
}

// 4. switch문 : 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = '패션후르츠';

switch (fruit) {
    case "사과":
        console.log('사과입니다.');
        break;
    case "바나나":
        console.log('바나나입니다.');
        break;
    case "수박":
        console.log('수박입니다.');
        break;
    default:
        console.log('아무것도 아닙니다.');
}