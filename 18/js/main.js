const userName = prompt("Enter your name");
console.log("Hello", userName);

const currentAge = 2023;
const birthYear = prompt("Enter your year of birth");
const userAge = currentAge - Number(birthYear);
console.log("Your age: ", userAge);

const sideSquare = prompt("Enter the length of the side of the square")
const perimeterSquare = Number(sideSquare) * 4;
console.log('Perimeter of the square: ', perimeterSquare)

const circleRadius = prompt("Enter circle radius")
const areaCircle = 3.14 * Math.pow(Number(circleRadius), 2);
console.log("Area of the circle: ", areaCircle)

const distance = prompt("Enter the distance between the two cities")
const time = prompt("In how many hours would you like to arrive?")
const speed = Number(distance) / Number(time)
console.log("You need to move at that speed", speed, "kilometers per hour, to keep up with", Number(time), "hourse.")

const hryvnias = 36.92;
const converter = prompt("Enter the amount of dollar")
const result = hryvnias * Number(converter)
console.log("You will get:", result.toFixed(2), "hryvnias.") 
