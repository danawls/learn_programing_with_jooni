const howOld = {
    drinkOld: function(){
        return parseInt( prompt("How old are you?") )
    }
};
const age = howOld.drinkOld();

if(isNaN(age) == true || age < 0) {
    console.log("Please write a number");
} else if(age < 19) {
    console.log("you can drink because you are less than 19 years old.");
} else if(age >= 19 && age <= 50) {
    console.log("You can drink!");
} else if(age > 50 && age <= 100) {
    console.log("You can drink but....Be careful! if you drink a many alchool, You can dye");
} else {
    console.log("You CAN'T drinkkkkk!!!!");
}