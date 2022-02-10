/* 2. conversion
centimeterToMeter */


// Centimeter to meter (function)
function centimeterToMeter(centimeters) {
    var meter = centimeters / 100;
    return meter;
}
var myCentimeters = 500;
var meter = centimeterToMeter(myCentimeters);
console.log('myCentimeters in meter', meter);
