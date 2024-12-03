function profilebio(name, income, debt){
console.log("username: " + name);
console.log("my income is: " + income);
let totalValues = income - debt;
console.log("My networth is : " + totalValues);
}

profilebio("Dionte", 100000, 100);

















function CheckTVInventory(tvs) {
    if (tvs > 0) {
    console.log("TV is in stock!");
    } else {
    console.log("Sorry, out of stock.");
    }
}


CheckTVInventory(30)