//Create a function that will act as your holiday schedule planner.
//  When you pass in a date. The event calenar should return an event 
// that you have planned on that day. If there is no event on that day 
// it should return "nothing is planned for this day". Your planner should 
// encompass the dates between 12/21/24 through 1/7/2025. You should have 
// atleast 5 events planned.







function CalenderDate(Date) {

    if (Date == "12/25/2024")
        console.log("you plan on celebrating christmas on December 25");

    else if (Date == "12/29/2024")
        console.log("You plan on hanging nout with friends on December 29");

    else if (Date == "12/31/2024")
        console.log("you plan on celebrating New Year's Withg loved ones on December 31");

    else if (Date == "1/4/2025")
        console.log("you plan on celebrating your birthday on january 1");

    else if (Date == "1/7/2024")
        console.log("you plan on starting school again on january 7");

    else { console.log("you have nothing planned for this day") }
}
CalenderDate("12/24/2024")