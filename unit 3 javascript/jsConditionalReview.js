// a function is a set of instructions
//that informs the computer on what to do with data

//Conditional statements us the if/ else 
//keywords to allow us to create multiple
//custom outcomes based on thbe data
//we receive
function timeOfDay(time) {
    console.log("it is afternoon. ");
    if (time == "am") {
        console.log("it is morning. ");
    } else if (time == "pm") {
        console.log("it is evening.");
    } else {
        console.log("sorry, cannot undersdtand input");
    }
}

timeOfDay()


function gradeLevel(grade) {
    if (grade > 90 && grade < 100) {
        console.log("This grade is an A. ");
    } else if (grade > 80 && grade < 90) {
        console.log("This grade nis a B");
    } else if (grade > 70) {
        
        console.log
    }


}


gradeLevel(84)






//nested conditions are functions
//inside of functions. This gives us more power
//to unique outcomes

function passwordRetrieval(email, password, securityQuestion) {
    if (email == "Dionte@gmail.com") {
        console.log("correct");
        console.log("please provide a password");
    } else {
        console.log("sorry, this email doesnt exist")
    }
}