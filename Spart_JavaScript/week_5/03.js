// 클래스 연습하기!

// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는 다음 네 개의 값이 필수로 입력돼야 합니다!
//  (1) modelName
//  (2) modelYear
//  (3) type
//  (4) price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성!
// 3. 이후 자동차를 3개 정도 만들어주세요(객체 생성)

class newCar {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  makeNoise() {
    console.log(`${this.modelName} : 빵!`);
  }

  makeYear() {
    console.log(`${this.modelName}은 ${this.modelYear}년도의 모델입니다.`);
  }
}

const car1 = new newCar("Sorento", "2023", "e", 5000);
const car2 = new newCar("K5", "2023", "f", 2000);
const car3 = new newCar("Palisade", "1993", "a", 4500);

car1.makeNoise();
car3.makeNoise();

car1.makeYear();
car2.makeYear();
car3.makeYear();
