// 동기, 비동기

// fetch("https://jsonplaceholder.typicode.com/todos/1", { id: 1, name: "jay" }) // 어떤 데이터를 입력하는 것
//   .then(function (response) {
//     if(response.~~~ === "success"{
//         alert("성공입니다")
//     }else {
//         alert("실패입니다")
//     })
//   }).catch(function(인자) {
//     ~~~
//   })

// await: a + wait
const result1 = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // 1
const result2 = await fetch(
  "https://jsonplaceholder.typicode.com/todos/1",
  result1
); // 2
const result3 = await fetch(
  "https://jsonplaceholder.typicode.com/todos/1",
  result2
); // 3
const result4 = await fetch(
  "https://jsonplaceholder.typicode.com/todos/1",
  result3
); // 4

if (result1.code === "성공") {
  alert("성공입니다.");
} else {
  alert("실패입니다.");
}

const func02 = async function () {
  //  (1) 데이터 1 받아오기
  const result1 = await fetch("http://~~~");

  //  (2) 데이터 2 받아오기
  const result2 = await fetch("http://~~~", result1);
};

func02();

const func03 = async () => {
  await fetch("http://~~~");
};

// try ~ catch ~ finally
// try: 시도하다
// catch: 잡다
// finally: 마침내
const func = async function () {
  try {
    //  (1) 데이터 1 받아오기
    const result1 = await fetch("http://~~~");

    //  (2) 데이터 2 받아오기
    const result2 = await fetch("http://~~~", result1);
  } catch (error) {
    console.log("알 수 없는 오류가 발생하였습니다.");
    // 오류 데이터 수집하는 로직
  } finally {
    // 무조건 실행
    // 성공 또는 실패 데이터 적재
  }
};
