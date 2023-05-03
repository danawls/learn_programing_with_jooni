const age = parseInt( prompt("How old are you?" ) );

if(isNaN(age) == true) {
    console.log("Please write a number");
} else if(age < 19) {
    console.log("you can drink because you are less than 19 years old.");
} else if(age >= 19 && age <= 50 && age < 100) {
    console.log("You can drink!");
} else if(age <= 100) {
    console.log("You CAN'T drinkkkkk!!!!");
} else {
    console.log("You can drink but....Be careful! if you drink a many alchool, You can dye");
}