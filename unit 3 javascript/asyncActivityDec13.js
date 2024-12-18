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






//You have been hired by target to assist them with their store 
// member discount software. The would like to make it so that shoppers 
// who have a specific membership tier can save a certain amount of money 
// on the products they buy. provided below are the memberships and the 
// discount amount they should recieve:

//superShopper should recieve a 10% discount on their items
//megaShopper should recieve a 15% discount on their items
//ultraShopper should receive a 20% discount on their items


function DiscountFunction(membership, itemPrice) {
    console.log("Testing. Function works");
    if (membership === "superShoper") {
        console.log("you are na superShopper, here is a 10 mpercent discount.");

        var discountAmount = itemPrice * 0.1
        console.log(discountAmount)
        var total = itemPrice - discountAmount
        console.log(total);

        
    } else if (membership === "megaShopper") {
        console.log("you are a mega shopper, here is a 15 percent discount.");
        var discountAmount = itemPrice * 0.15;
        console.log(discountAmount);
        var total = itemPrice - discountAmount
        console.log(total);

} else if (membership === "ultraShopper") {
    console.log
}

}