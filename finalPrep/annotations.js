// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

//Create a function called buildABear and assign the parameters of name, age, fur, clothes and specialPower that the function will use.
function buildABear(name, age, fur, clothes, specialPower) {
  //Assign greeting variable to a string that interpolates the name of the bear in order to introduce the bear.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //Assign demographics variable to an array in which the first value is the name parameter and second is age parameter.
  var demographics = [name, age];
  //Assign powerSaying variable to a string about the SpecialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //Create object for builtBear that defines his basic information, clothes, exterior, cost, sayings, and if it is cuddly.
  var builtBear = {
    //define basicInfo property as the demographics parameter
    basicInfo: demographics,
    //define clothes property as the clothes parameter
    clothes: clothes,
    //define exterior property as the parameter
    exterior: fur,
    //define cost property as an integer of 49.99
    cost: 49.99,
    //define sayings property as an array in which the first value is the greeting paramter, second value is the powerSaying variable, and third value is a string that says "Goodnight my friend!"
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //define isCuddly property as a Boolean where the value is false.
    isCuddly: true,
  };
//end the function assign the value of builtBear to the completed function
  return builtBear
}

//Create a bear using the buildABear function who is named Fluffy, age is 4, fur is brown, clothes are pants, jorts, and tanktop, and its special power is to give you nightmares.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//Create a bear using the buildABear function who is named Sleepy, age is 2, fur is purple, clothes are pajamas and sleeping cap, and its special power is sleeping in.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz

//Create a function called fizzBuzz with three parameters called num1, num2, and range.
function fizzBuzz(num1, num2, range) {
  //Create a loop that specifies the amount of times to repeat the function is the value of the range parameter.
  for (var i = 0; i <= range; i++) {
    //If the modulus of the counter and the num1 parameter is equal to zero and so is the modulus of the counter and the num2 parameter, then the output to the console is "fizzbuzz"
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
    //If the above condition is false, and the modulus of the counter and the num1 parameter is equal to zero, then the output to the console is "fizz"
    } else if (i % num1 === 0) {
      console.log('fizz');
    //If the above conditions are false, and the modulus of the counter and the num2 parameter is equal to zero, then the output to the console is "buzz"
    } else if (i % num2 === 0) {
      console.log('buzz');
    //If none of the above conditions are true, log the value of the counter.
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);
fizzBuzz(5, 8, 400);
