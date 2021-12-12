/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

  This is an if...else statement, which checks if the doorChoice variable assigned equals 1, then the bearClothing variable will change to hat; if the door choice variable is assigned is equal to any other number besides 1, the bearClothing variable will change to scarf.
  In plain English: if you choose Door 1, the bear will be wearing a hat, but if you choose a different door, the bear will wear a scarf.

2. What variable has a new value assigned to it after the first if statement executes?

  bearClothing will change values depending on which door is picked.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

  The value of bearClothing changes to scarf.  The prompt says there are only 2 doors, but the code was not written that way to tell the computer that shouldn't be an option.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

  This is a multiple if...else statement.
  If the bearChoice variable assigned equals 1, a message appears saying that the bear shows you a secret passage out.
  If that's not true, and the bearChoice variable assigned equals 2, a message appears saying the the bear starts to cry.
  If neither of those are true, and the bearChoice variable assigned equals 3, a message appears saying that you run as fast to the next room and it's full of snakes.
  If none of the above options are true and the bearChoice variable assigned is anything else besides 1, 2 or 3, a message appears saying you stay with the bear and become it's best friend.


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

  A message will populate saying "You run as fast as you can into the next room.  It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

  A message will populate saying  "You thell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

  I prefer doorChoice === 1 and bearClothing === 1.  I'm not a hat girl so I won't mind giving mine up for the bear to help show me the way out.


*/
