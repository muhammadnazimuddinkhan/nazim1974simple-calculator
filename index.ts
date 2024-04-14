#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
    {message: "please enter your first number",
    type:"number",
    name:"firstnumber"},
    {
        message:"please enter your second number",
        type:"number",
        name:"secondnumber"},
        {
            message:"please select one operator",
            type:"list",
            name:"operator",
            choices:["addition","subtraction","multiplication","division"]
        }
]);
if (asnwer.operator === "addition"){console.log(asnwer.firstnumber+asnwer.secondnumber

)}
else if (asnwer.operator === "subtraction"){console.log(asnwer.firstnumber-asnwer.secondnumber)}

else if(asnwer.operator === "multiplication"){console.log(asnwer.firstnumber*asnwer.secondnumber)}
else if (asnwer.operator === "division"){console.log(asnwer.firstnumber/asnwer.secondnumber)}
else {console.log("please select valid operator")}

