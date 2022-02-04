// 8. declare an array. number of elements. update or change 4th position element. add or remove elements. check whether a specific value exists in the array

//""Array index started from 0, then 1, then 2, then 3, 4, 5...........""

var groceryShop = ['Rice', 'pulse', 'Sugar', 'Salt', 'onoin', 'Oil'];
console.log(groceryShop);

// How much element in the array, result show 6
var groceryCount = groceryShop.length; 
console.log(groceryCount);
// element position, result show 2  
var SugarIndex = groceryShop.indexOf('Sugar'); 
console.log(SugarIndex);
// not exist element position, result show -1  
var index = groceryShop.indexOf('potato'); 
console.log(index);
// element 2nd position, result show Sugar  
var index = groceryShop[2]; 
console.log(index);
// element 20th position, result show Undefined, because of 20th position not exist  
var index = groceryShop[20]; 
console.log(index);
// 4th position element onion change to Garlic,
// result show [ 'Rice', 'pulse', 'Sugar', 'Salt', 'Garlic', 'Oil' ]
groceryShop[4] = 'Garlic';
console.log(groceryShop);
// two element (soap and chocolate) included/added in Array 
groceryShop.push('soap');
groceryShop.push('chocolate');
console.log(groceryShop);
// result show ['Rice', 'pulse', 'Sugar', 'Salt', 'Garlic', 'Oil', 'soap', 'chocolate']

// one element (chocolate) Excluded/deduct in Array 
groceryShop.pop('chocolate');
console.log(groceryShop);
// result show [ 'Rice', 'pulse', 'Sugar', 'Salt', 'Garlic', 'Oil', 'soap']