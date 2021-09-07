/* zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions()
*/
let ikRockArrowFunctions = ()=> console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions()
//B
let fivePlusSeven = () => 5 + 7

fivePlusSeven();
//C
let myFunction = (a, b) => a + b
let addFive = (a) => a + 5
// addFive(1); // -> 6
const createObject = () => ({ greeting = console.log("hoi") })
// createObject() returns {greeting}
//