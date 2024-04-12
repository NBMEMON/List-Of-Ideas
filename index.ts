#! /usr/bin/env node
import inquirer from "inquirer";
let bad_ideas = [];
let good_ideas = [];
let condition= true;
while(condition){
const ideas = await inquirer.prompt([
  {
    message: "Write your Ideas",
    type: "input",
    name: "user_idea",
  },
  {
    message: "\tRank Your Idea is it a Good Idea or A Bad idea\t",
    type: "list",
    choices: ["Good idea", "Bad idea"],
    name: "User_choice",
    default: "None",
  },
]);

if (ideas.User_choice === "Good idea") {
  good_ideas.push(ideas.user_idea);
//   console.log("Good Idea", good_ideas);
} else if (ideas.User_choice === "Bad idea")
{
  bad_ideas.push(ideas.user_idea);
//   console.log("Bad Idea", bad_ideas);
}

console.log("Good Ideas:",good_ideas);
console.log("Bad Idea:",bad_ideas);

let add_more = await inquirer.prompt([{
         message:"Want to add more",
         choice:["Yes","No"],
         type:"confirm",
         name:"choice",
         default:"Yes",
}]);
condition=add_more.choice;
if (add_more.choice === "No"){

}};


