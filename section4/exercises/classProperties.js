/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog

class Dog{
}

var murphy = new Dog();
console.log(murphy);

var birdie = new Dog();
console.log(birdie);

// Prompt 2: Snack

class Snack{
}

var apple = new Snack ();
console.log(apple);
var granolaBar = new Snack();
console.log(granolaBar);

// Prompt 3: Shirt

class Shirt{
}

var item00001 = new Shirt ();
console.log(item00001);
var item00002 = new Shirt ();
console.log(item00002);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog2{
  constructor() {
    this.breed = "Yorkie";
    this.ageInYears = 9;
    this.weightinPounds = 8;
  }
}

var duckie = new Dog2();
console.log(duckie);

// Prompt 2: Snack

class Snack2{
  constructor() {
    this.calories = 100;
    this.carbsInGrams = 20;
    this.proteinInGrams = 1;
  }
}

var chips = new Snack2 ();
console.log(chips);


// Prompt 3: Shirt

class Shirt2{
  constructor() {
    this.price = 45;
    this.size = "XS";
    this.type = "T-Shirt";
  }
}

var item11111 = new Shirt2 ();
console.log(item11111);


//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog3{
  constructor(breed, ageInYears, weightinPounds) {
    this.breed = breed;
    this.ageInYears = ageInYears;
    this.weightinPounds = weightinPounds;
  }
}

var penelope = new Dog3("Goldendoodle", 7, 50);
console.log(penelope);

var millie = new Dog3("Old English Sheepdog", 3, 45);
console.log(millie);

// Prompt 2: Snack

class Snack3{
  constructor(calories, carbsInGrams, proteinInGrams) {
    this.calories = calories;
    this.carbsInGrams = carbsInGrams;
    this.proteinInGrams = proteinInGrams;
  }
}

var banana = new Snack3 (80, 10, 2);
console.log(banana);
var cookie = new Snack3 (400, 40, 10);
console.log(cookie);

// Prompt 3: Shirt

class Shirt3{
  constructor(price, size, type) {
    this.price = price;
    this.size = size;
    this.type = type;
  }
}

var item12345 = new Shirt3 (55, "Medium", "Crew Neck");
console.log(item12345);
var item54321 = new Shirt3 (72, "Large", "V-Neck");
console.log(item54321);
