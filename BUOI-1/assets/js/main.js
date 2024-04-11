import {sumCount, sumOdd} from './math.js'

console.log(sumCount(4,5));
console.log(sumOdd(4,5));





// Khai bao bien voi let, const
let email = "nguyen van a@gmail.com";
email = "nguyen van b@gmail.com";

// console.log(email);

// const age = 30;
// age = 40;
// console.log(age);



// function thuong 
const person = {
  name: "Dat",
  subName: " Tran Van",
  fullName: function() {
    console.log(this);
    return this.name + this.subName;
  }
}

// console.log(person.fullName());
const personArrowFn = {
  name: "Dat",
  subName: " Tran Van",
  fullName: () => {
    console.log(this);
    return this.name + this.subName;
  }
}

// console.log(personArrowFn.fullName());

// Destructuring voi array
const arr_1 = [1,2,3,4];
// console.log(arr_1[0]);
const [a,b,c,d] = arr_1;
// console.log(a);


// Destructuring voi Object
const person_2 = {
  name: "hung",
  subName: "Nguyen Van",
  age: 20
}

// const {name, subname, age: M = 30} = person_2;

// console.log(M);
// console.log(person_2.age);

// Default Prameters

function hello(name = "Name") {
  console.log(name)
}

// hello();

const sum = (...numbers) => {
  // console.log(numbers);
  // return a + b +c;
  let total = 0;
  numbers.forEach(value => {
    // console.log(value);
    return total += value;
  })

  return total
}

// console.log(sum(3,4,5, 20, 100));
const namePerson = {
  name: "A",
  age: 30,
  email: "a@gmail.com"
}

const {name, ...rest} = namePerson
// console.log(rest);



// Spread Operator

let numberArr = [1,2,3,4];

// numberArr.push(4,5);
let numberArr_2 = [...numberArr, 4,5]

// console.log(numberArr_2);


// Tinh tong numberArr_2
let sumArr_2 = (...numbers) => {
  console.log(numbers);
}

sumArr_2(...numberArr_2);
