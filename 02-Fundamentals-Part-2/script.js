"use strict";
//STRICT MODE czyli po prostu używamy tego zawsze na początku kodu po to zeby nam lepiej pokazywało błedy tak w skrócie
//FUNCTIONS
// Prosta funkcja bez paramtrowa
/*
function logger() {
  console.log("Cos tam robie i moge robic duzo razy");
}
logger();
logger();
logger();
function drink(orange, apples) {
  const juice = console.log(
    `DŻusik pomaranczowy ${orange} razy i Jabułkowy ${apples} razy`
  );
  return juice;
}
const juice = drink(21, 41);
console.log(juice);
*/
//FUNCTIONS EXPRESSION czyli takie przypisywanie funkcji do zmiennej w sumie nie wiem po co to ale ok
//tak wyglada moim zdaniem do pizdy
/*
const calcage1 = function (age1) {
  return 2024 - age1;
};
const wiek = calcage1(19);
console.log(wiek);
*/
//ARROW functions czyli strzałkowe funkcje bardzo spoko do krótkich funkcji
/*
const age3 = (birthYear) => 2024 - birthYear;
console.log(age3(2003));
const age4 = (birthYear, firstName) => {
  const osoba = console.log(
    `Mam na imie ${firstName} i mam ${2024 - birthYear} lat`
  );
  return osoba;
};
console.log(age4(2003, "Józek"));
*/
/*
function cutting(fruit) {
  return fruit * 3;
}
function owocki(apples, orange) {
  const pieceapple = cutting(apples);
  const pieceorange = cutting(orange);

  const summary = console.log(
    `Kawałki jabłka ${pieceapple} a kawałki pomaranczy ${pieceorange}`
  );
  return summary;
}
console.log(owocki(2, 4));
*/
//TASK Z FUNKCJAMI
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(250, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins / 2 >= avgKoalas) {
    console.log(`Winner is Dolphins`);
  } else if (avgKoalas / 2 >= avgDolphins) {
    console.log(`Winner is Koalas`);
  } else {
    console.log(`Nobody wins`);
  }
}
checkWinner(scoreDolphins, scoreKoalas);
*/
//ARRAYSY
/*
const friends = ["Peter", "John", "Jay"];

console.log(friends);

friends.push("Józek"); //dodaje ostatnie
friends.unshift("Paweł"); //dodaje pierwszy
console.log(friends);
friends.pop(); //usuwa ostatnie
friends.shift(); //usuwa pierwszy
console.log(friends);

console.log(friends.indexOf("Peter"));
console.log(friends.includes("Józek"));
if (friends.includes("John")) {
  console.log("Siemanko Johny jestes w tablicy");
}
*/
//Task z taablicami
/*
const calcTip = function (valueOfBill) {
  if (valueOfBill >= 50 && valueOfBill <= 300) {
    return valueOfBill * 0.15;
  } else {
    return valueOfBill * 0.2;
  }
};
console.log(calcTip(100));
const bills = [125, 555, 44];
const calledTips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const sum = [
  bills[0] + calledTips[0],
  bills[1] + calledTips[1],
  bills[2] + calledTips[2],
];
console.log(calledTips);
console.log(sum);
*/
//OBJECT
/* 
const jonas = {
  firstName: "Jonas",
  friends: ["Michael", "Jakistam", "ciul"],
};
console.log(
  `${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`
);
*/
//OBJECT METHODS
// const jonas = {
//   firstName: "Jonas",
//   friends: ["Michael", "Jakistam", "ciul"],
//   birthYear: 1991,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   hasDriversLicense: function () {
//     if (this.calcAge >= 18) {
//       console.log(
//         `${
//           this.firstName
//         } is a ${this.calcAge()}-year old teacher and he has a drivers license`
//       );
//     } else {
//       console.log(
//         `${
//           this.firstName
//         } is a ${this.calcAge()}-year old teacher and he hasn't a drivers license`
//       );
//     }
//   },
// };
// console.log(jonas.hasDriversLicense());
// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   height: 1.69,
//   weight: 78,
//   calcBMI: function () {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   },
// };
// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   height: 1.95,
//   weight: 92,
//   calcBMI: function () {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   },
// };
// console.log(
//   `The higher bmi has ${mark.calcBMI() > john.calcBMI() ? "Mark" : "John"}`
// );
// LOOPS
//Czyli w sumie banał bo niczym sie nie rózni for od innych xdddd
//Continue i Breaki tez sa i tak samo działaja Nyj i co wiecej uwidzime jaki bedzie challange xd
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const arr = [];
const calcTip = function (valueOfBill) {
  if (valueOfBill >= 50 && valueOfBill <= 300) {
    return valueOfBill * 0.15;
  } else {
    return valueOfBill * 0.2;
  }
};
for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
  console.log(bills[i], tips[i], totals[i]);
}

const calcAverage = function (arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma / arr.length;
};

console.log(calcAverage(tips));
