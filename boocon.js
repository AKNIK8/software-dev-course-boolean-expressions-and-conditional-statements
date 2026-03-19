/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}


const hasSword = true
const hasCompass = false


console.log("In the village you see an inn with a party happening and a dark stable.");
const choice2 = readline.question("Do you go to the 'inn' or the 'stable'?");


if (choice2 === "inn" && hasSword) {
  console.log("You enter the inn and are greeted by the owner who asks you for help defeating the town bandit.");
} else if (choice2 === "inn" && !hasSword) {
  console.log("You are stopped outside the inn by a bandit who challeges you to a duel.");
} else if (choice2 === "stable" || hasCompass) {
  console.log("You go to the stable where the owner asks you to deliver a horse the next village past the bandits.");
} else {
  console.log("You stay standing at the gates of the village.");
}


const hasDagger = true
const hasCloak = false


console.log("You defeat the town bandits.");
const choice3 = readline.question("Do you become a 'bandit' your self or accept the title of 'champion' of the town?");




if (choice3 === "champion" && hasDagger) {
  console.log("You accept the title of champion.");
} else if (choice3 === "bandit" || hasCloak) {
  console.log("You are the bandit outside town");
} else {
  console.log("You run away.");
}

