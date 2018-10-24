// 1
var apples = 14;
console.log(apples);

console.log("I have " + apples + " apples.");

// 2
var materials = ['wood', 'metal', 'stone'];
words = {
  elephant: "The world's largest land mammal.",
  school: 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.'
}

// 3
var num = 16;
if (num > 10) {
  console.log(num + ' is greater than 10.');
} else if (num == 10) {
  console.log(num + ' is exactly 10.');
} else {
  console.log(num + ' must be less than 10.');
}

// 4
for (let i = 0; i < 10; i++) {
  console.log("Doing the same thing over and over.");
}

// 5
var base = 5;
for (let num = 0; num < 20; num++) {
  console.log(num + base);
}

// 6
var total = 0;
for (let num = 0; num < 100; num++) {
  total += num;
}
console.log(total);

// 7
for (let height = 3; height < 15; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
}

// 8
var containers = ['purse', 'wallet', 'backpack'];
for (let i = 0; i < containers.length; i++) {
  console.log(containers[i]);
}

// 9
function helloWorld() {
  console.log("Hello World!");
}

helloWorld();

// 10
function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

var amount = add(5, 7);
console.log(amount);