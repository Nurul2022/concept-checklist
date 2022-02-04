// 10. you have an array of numbersbers. display only the numbersbers bigger than 80

//১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
//Ref video 19-8
var numbers = [50, 70, 80, 90, 100, 110, 120];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 80) {
        break;
    }


}

