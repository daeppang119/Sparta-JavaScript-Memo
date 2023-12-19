// 아래 결과와 같이 출력되도록 newStr에 들어갈 코드를 작성해 보세요.
// split(seperator, limit);
// 1. 구분자를 이용해 자르기
str.split(" "); // ['1', '2', '3']

// 2. 한글자씩 다 자르기
// 인자로 빈 배열을 준 것이다.
str2.split(""); // ['a', 'b', 'c', 'd', 'e', 'f']

// 3. 최대 n개 까지만 자르기
// 2번째 인자(limit)로 배열의 개수를 지정한다.
str2.split("", 3); //  ['a', 'b', 'c']

// 4. 배열을 구분자로 사용하기
// split(['a','b'])은 split(String(['a','b'])) 즉 split('a,b')와 같다.
str3.split(["a", "b"]); // ["c", "c,", "c", "c", "c"]

// etc
// seperator가 등장하지 않거나 없을경우, 반환되는 배열은 원본 문자열을 유일한 원소로 가짐
str2.split(); // ['hello']

// split을 사용해 문자열 뒤집기
str2.split("").reverse().join(""); //fedcba

const str = "green/red/yellow/blue/white";

const splittedArr = console.log(str.split("/", 5)); // split 메소드를 이용하여 이 부분을 작성해 보세요.
// 출력 결과: ["green", "red", "yellow", "blue", "white"]
