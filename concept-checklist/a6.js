// 6. if-else

/*var beefPrice = 200;
var myMoney = 100;

if (beefPrice < myMoney) {
    console.log('Yes! I must eat beef')
}
else {
    console.log('Lentil soup with Smashed potato and well cooked rice')
}  // result show Lentil soup with Smashed potato and well cooked rice
because of condition is false my money less but beef price high */

/*var beefPrice = 200;
var myMoney = 100;

if (beefPrice > myMoney) {
    console.log('Yes! I must eat beef')
}
else {
    console.log('Lentil soup with Smashed potato and well cooked rice')
}  // result show Yes! I must eat beef
because of condition is true my money graterthan beefPrice */


// ""if condition is true, then result will be show otherwise else if / else show""


var beefPrice = 80;
var chickenPrice = 60;
var soupPotatoRice = 40;
var myMoney = 40;

if (beefPrice < myMoney) {
    console.log('Yes! I must eat beef')
}
else if(chickenPrice < myMoney){
    console.log("Chicken with well cooked rice")
}
else if(soupPotatoRice < myMoney){
    console.log("only soup, potato and rice")
}
else {
    console.log('Lentil soup with Smashed potato and well cooked rice')
}  // result show 