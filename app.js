// Iteración #1
let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let z = "h" + "y";

// Iteración #2
// 1.1
const character = new Object();
character.name = "Jack Sparrow";
character.age = 10;
character.age = 25;
// 1.2
let character2 = new Object();
character2.firstName = "Jon";
character2.lastName = "Snow";
character2.age = 24;

console.log(
  "Soy " +
    character2.firstName +
    " " +
    character2.lastName +
    ", tengo " +
    character2.age +
    " y me gustan los lobos."
);
// 1.3
const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

console.log(toy1.price + toy2.price);
// 1.4
globalBasePrice = 10000;
let car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
let car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;
car2.finalPrice = car2.basePrice + globalBasePrice;
car1.finalPrice = car1.basePrice + globalBasePrice;

console.log(car2.finalPrice);
// Iteración #3
multiplication = 10 * 5;
division = 10 / 2;
y = 10;
z = 5;
x = y * z;

// Iteración #4
//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);
//1.2
const avengerss = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengerss[0] = "IRONMAN";

// 1.3
const avengersss = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers.length);
//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");

console.log(rickAndMortyCharacters[4]);
//1.5
const rickAndMortyCharacterss = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacterss.pop();

console.log(rickAndMortyCharacterss);
//1.6
const rickAndMortyCharactersss = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharactersss.splice(1, 1);

console.log(rickAndMortyCharactersss);

//Iteracion #5
const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(
    "number3 por 5 es igual a number1 Y number1 por 2 es igual a number2"
  );
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(
    "number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3"
  );
}


