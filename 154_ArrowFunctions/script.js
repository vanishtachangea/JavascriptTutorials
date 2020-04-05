const splitPhrase = phrase => phrase.split(" ");
window.console.log(splitPhrase("I am Vanishta"));
var displayMessage =() =>{
    window.console.log("heello there");
};
displayMessage();

var setEmployee =(id, name)=> ({id: id, name: name});
window.console.log(setEmployee(1, "vanish"));

const inventory =
[
    {name:"tshirt", price: 25},
    {name:"jeans", price: 50},
    {name:"hat", price: 30}
];
const prices = inventory.map(product => product.price);
window.console.log(prices);

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const divisibleby3 = array.filter(num => num%3 ===0);
window.console.log(divisibleby3);