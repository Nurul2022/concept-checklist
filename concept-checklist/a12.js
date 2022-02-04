// 12. declare an object and change any property of that object.

var laptop = {
    price: 50000,
    color: "Black",
    Storage: "1tb",

}
/* To know full configuration of ;aptop
console.log(laptop);
// result show: { price: 50000, color: 'Black', Storage: '1tb' } */


/* To know sepcific one property, such as color (Method 01)
console.log(laptop.color);
// result show: Black
// To know sepcific one property, such as storage (Method 02)
var laptopStorage = laptop.Storage;
console.log(laptopStorage);
// result show: 1tb */


// Property value change (Method 01) price
laptop.price = 60000;
//console.log(laptop);
// result show: { price: 60000, color: 'Black', Storage: '1tb' }

// Property value change (Method 02) price
laptop["price"] = 70000;
//console.log(laptop);
// result show: { price: 70000, color: 'Black', Storage: '1tb' }

// Property value change (Method 02) price
var priceProperty = "price";
laptop[priceProperty] = 80000;
console.log(laptop);