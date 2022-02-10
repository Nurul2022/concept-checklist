/* 1. conversation
feetToInch */

/*inches to feet (normal)
var inches = 132; 
var feet = inches/ 12;
console.log(feet); */

/*feet to inches (normal)
var feet = 10; 
var inches = feet * 12;
console.log(inches); */


 //inches to feet (function)
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet); 


/* feet to inches (function)
function feetToInch(feet) {
    var inches = feet *12;
    return inches;
} 
var myFeet = 11;
var inches = feetToInch(myFeet);
console.log('myFeet in inches', inches);*/