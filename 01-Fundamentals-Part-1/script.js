/*
let js = "amazing";
console.log(40 + 8 + 342);
let firstName = "Matilda";
console.log(firstName);
*/
//DATA TYPES
//let javascrpitIsFun = true;
//console.log(javascrpitIsFun);
//VARIABLES
/*
let age = 43;
age = 60;

const firstName = Johny;
*/
//OPERATORS
/*
x++;
x--;
x+=2;
console.log(firstName + ' '+lastName);
*/
//PROCEDES OPERATORS
// czyli porównywanie priorytetów operatorów i jak to działa
//Najwyższy priorytet nawiasy()
//TASK 1
/*
const heightMark = 1.69;
const heightJohn = 1.95;
const weightMark = 78;
const weightJohn = 92;
const bmiMark = weightMark / (heightMark * heightMark);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
let markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark);
console.log(bmiJohn);
console.log(markHigherBMI);
*/
//STRINGS
// Ciągi znaków w ES6
/*
const firstName = "Johny";
const age = 54;
const job = "programmer";

console.log(`Ja jestem ${firstName} mam ${age} lat i jestem ${job}`);

console.log(`Jestem koksem 
ze enterami 
bez sleszy`);
*/
// IFY ELSYYY
//IFy działaja tak samo jak we wszystkim
/*const heightMark = 1.69;
const heightJohn = 1.95;
const weightMark = 78;
const weightJohn = 92;
const bmiMark = weightMark / (heightMark * heightMark);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
let markHigherBMI = bmiMark > bmiJohn;
//console.log(bmiMark);
//console.log(bmiJohn);
//console.log(markHigherBMI);
if (bmiMark > bmiJohn) {
  console.log(`Marks BMI (${bmiMark}) is higher than John (${bmiJohn})`);
} else {
  console.log(`John BMI (${bmiJohn}) is higher than Mark (${bmiMark})`);
}
*/
//TYPE CONVERSION
/*
let n = 43;
let m = "42";
console.log(n + m);
*/
//Plus łaczy w ciąg znaków a minus jest dzialaniem tak samo jak mnożenie i dzielenie
//Rzutowanie to typowe jak w jezykach
//console.log(String(n)+m);
//console.log(n+Number(m));
//EQUALITY OPERATORS
//===vs== Podwójny znak nie porównuje typów czyli np '18'== 18 zadziała
//A potrójny porównuje takze typ i jego sie zawsze uzywa bo jest bardziej strict
//BOOLOWSKIE AND OR ALBO !
//Czyli tak jak w kazdym jezyku
/*
const scoreDolphins = (100 + 108 + 4) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins > scoreKoalas && scoreDolphins < 100) {
  console.log("Dolphins have to 100 points");
} else if (scoreKoalas > scoreDolphins && scoreKoalas < 100) {
  console.log("Koalas have to 100 points");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy! ");
}
*/
//SWITCHE
/*
const day = "monday";

if (day === "monday") {
  console.log("cos tam cos tam");
} else if (day === "tuesday") {
  console.log("inne cos tam");
} else if (day === "wednesday" || day === "thursday") {
  console.log("sroda abo cwortek");
} else if (day === "friday") {
  console.log("Piateczek");
}
  */
//itd itp
//TRÓJOPERATOR ARGUMENTOWY
/*let bill = 275;
let tip = bill >= 50 && bill < 300 ? bill * (15 / 100) : bill * (20 / 100);
let summary =
  bill >= 50 && bill < 300
    ? console.log(`Tip is ${tip} bill is ${bill} summary ${tip + bill}`)
    : console.log(`Tip is ${tip} bill is ${bill} summary ${tip + bill}`);
    */
