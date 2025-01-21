//Using the list above, create a function that will reverse the order of the list/array.
//Hint: there is a method that you can use to accomplish this.

var campingSupplies = ['tent', 'sleeping bag', 'flash light', 'camping knife']
var campingSupplies2 = campingSupplies.reverse();

//Using the list above, Create a function that will add an item that you would bring 
//to a camping trip to your list/array.

campingSupplies.push('flint n steel')
console.log(campingSupplies)

//Create a function the will combine the campingSupplies list/ array, with the list/array provided below:
//campingFood = ['marshmellows','gram crackers','chocolate','chicken hot dogs','water',]

var campingSupplies = ['tent', 'sleeping bag', 'flashlight', 'camping knife']
var campingFood = ['marshmellows', 'gram crackers', 'chocolate', 'chicken hot dogs', 'water',]

var combine = campingSupplies.concat(campingFood);
console.log(combine);

//Create a function that will remove the "flash light" item from the 
// list/array and replace it with a "camp fire kit" item.

campingSupplies[2] = "camp fire kit";

console.log(campingSupplies)