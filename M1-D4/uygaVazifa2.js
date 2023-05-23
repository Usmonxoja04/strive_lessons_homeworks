// 1-savol
let positiveNumber = [12, 14, 15, 17, 19];

//2-savol
let student = {
  name: "Usmonxoja",
  surname: "Moydinov",
  age: 18,
  email: "usmonxojamoydinov3@gmail.com",
};
console.log(student);
// 3-savol
student.drivingLicence = true;
console.log(student);
// 4-savol
delete student.age;
console.log(student);

// 5-savol
let student2 = {
  name: "Asadbek",
  surname: "Azamjonov",
  age: 18,
  email: "usmonxojamoydinov3@gmail.com",
};
console.log(student2);

//6- savol
function freeDelivery(totalShoppingCart) {
  // savdosi total < 50
  //savdosi + 10 dostavkasi

  // savdsi >= 50
  // ayt dostavas tekin, savdaosi total
  if (totalShoppingCart < 50) {
    console.log(totalShoppingCart + 10);
  } else if (totalShoppingCart >= 50) {
    console.log(totalShoppingCart);
  }
}
freeDelivery(50);

// 8-savol
let car = {
  brand: "GM-motors",
  model: "Damas",
  licensePlate: "45",
};
let car2 = {...car};
console.log("car2", car2);
car2.licensePlate = 67;
let car3 = {...car};
car3.licensePlate = 50;
console.log("car3", car3);
let car4 = {...car};
car4.licensePlate = 78;
console.log("car4", car4);

//9-savol
let carsForRent = [car, car2, car3, car4];
console.log("carsForRent3", carsForRent);

//10-savol
let sliced = carsForRent.slice(1, -1);

console.log(sliced);

//11-savol
console.log(car3 + car3.brand + car3.licensePlate);
// typeof
let word = true;
console.log(typeof word);

console.log(typeof car3.licensePlate);

if (typeof word == "boolean") {
  console.log(word + " World");
}

//12-savol
let carsForSale = [car, car2, car3];
let totalCars = carsForSale.length;
// console.log(carsForRent);

// 13 savol
let arraysOfAppes = ["appleRed", "Apple", "AppleGreen"];

for (let i = 0; i < arraysOfAppes.length; i++) {
  console.log(arraysOfAppes[i]);
}
console.log(arraysOfAppes);
