//Create a function that will determine if a number passed into it's funtion parameters is either positive or negative. 
// For example, If I pass in the number 10 it should return the message,"this is a positive number", or if I type in the number -12, it should return the message, 
// "this is a negative number. If the user types in zero, it should return the message; "this is zero".



function Numbers(Numbers) {
    if (Numbers > 1) {
        console.log('positive'),
    } else if (Numbers < -1) {
        console.log("negative");
    } else if (Numbers == 0) {
        console.log("this is zero");
    }
}

Numbers(0)



//You have been hired by netflix to help them develop a movie ticket program. You must create a function 
// that will check the movie goers age and return the price of the movie ticket based on that person's age. 
// Provided are the lists of age and the prices:

//10 and under should pay $5.00
//16 and up should pay $10.00
//20 an up should pay $15.00
//65 and up should pay 5.00

function netflixTickets(Age) {
    if (Age < 10) {
        console.log("price is $5.00");
    } else if (Age > 10 && age <16 ) {
        console.log("price is $10.00");
    } else if (Age > 21) {
        console.log("price is $15.00");
    } else if (Age > 50) {
        console.log("price is $7.00");
    }
}


netflixTickets(4)