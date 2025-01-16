classes = ["math",
    "reading",
    "gym",
    10,
    10,23,
    true,
    "reading",
];


var shirts = ['s','m','l']
var shoe = ['nike','addidas']

//methods = a special type of function that works on list and objects

//push() method = a special function that 
// allows us to add an item or list, the new piece 
// of dta will always go to the back/ end ofthe list.

var bookbag = ['pencils', 'pens', 'notebopok', 'fiction book']
bookbag.push('sketchbook')
console.log(bookbag)

//pop() method = a special fuction that allows us to remove 
// an item from a lsit. the most recent itm usually.usually 
// at the end of the lsit.
//this method does not need a argument
bookbag.pop()
console.log(bookbag)

//length fuction = a secial function that 
// counts the number of items inside a list
console.log(bookbag.length)

itemsInCart= ['pencils', 'pens', 
    'notebopok', 'fiction book']
   

function addAmazonCart(item){
    itemsInCart= [];
    itemsInCart.push(item);
    console.log(itemsInCart)
};
function removeAmazonCart(item){
    itemsInCart.pop(item);
    console.log(itemsInCart)
}

addAmazonCart('sneakers')
removeAmazonCart()