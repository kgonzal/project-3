// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

//b.

let bitBatBotOrNot = n => {
  //your code goes here
  let result = "";
  {
    if (n % 3 == 0) result = `${result}Bit`;
  }
  {
    if (n % 5 == 0) result = `${result}Bat`;
  }
  {
    if (n % 7 == 0) result = `${result}Bot`;
  }
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) result = `${result}Not`;

  return result;
};

console.log(bitBatBotOrNot(9));

//c.

findAllbitBatBotOrNots1 = arr => {
  let numbers = [1, 100];
  let array = numbers;
  let result = "";
  arr.map("bit", "Bat", "Bot", "Not");

  return result;
};

console.log(findAllbitBatBotOrNots1(50));

//d.

let findAllbitBatBotOrNots2 = arr => {
  //your code goes here
  for (i = 0; i < array.length; i++) {
    text += arr.push();
  }
};

console.log(findAllbitBatBotOrNots2(8));

//e.
findAllbitBatBotOrNots3 = arr => {
  let num = [];
  for(each of arr){
    num.push(each+ bitBatBotOrNot(each))
  }
  return num;

};

console.log(findAllbitBatBotOrNots3(5));

//f.
let findAllbitBatBotOrNots4 = arr => {
  let numbers = [];
  numbers.each(){
    arr.push(bitBatBotOrNot)
  }
};

console.log(findAllbitBatBotOrNots4(5));

//test the functions
