let age = 32;
let userName = "jaehyun";
let hobbies = ["sports", "cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totaladultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totaladultYears = calculateAdultYears(age);
console.log(totaladultYears);

age = 45;
totaladultYears = calculateAdultYears(age);

console.log(totaladultYears);

let person = {
  name: "MAX",
  greet() {
    console.log("Hello!");
  }
};
person.greet();
