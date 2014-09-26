///////////////////////////////
////////// PROBLEM 1 //////////
///////////////////////////////

// var firstReverse = function(str) {
// 	return str.split('').reverse().join('');
// };
// console.log( firstReverse('rhombus') );
// console.log( firstReverse('racecar') );
// console.log( firstReverse('zebra') );



///////////////////////////////
////////// PROBLEM 2 //////////
///////////////////////////////

// var swapCase = function(str) {
//     var newArr = [];
//     for (var i=0; i<str.length; i++) {
//         if (str.charAt(i) === str.charAt(i).toLowerCase()) {
//             newArr.push(str.charAt(i).toUpperCase());
//         	} 
//         else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
//             newArr.push(str.charAt(i).toLowerCase());
//         	}
//     };
//     return newArr.join(', ');
// };
// console.log( swapCase('Hello World') );
// console.log( swapCase('rOCK yoUr SoCKs ofF'));



///////////////////////////////
//////////// BONUS ////////////
///////////////////////////////

var letterCount = function(str) {
    var newObj = {};
    var part1 = str.split(' ');
    
    console.log(part1);

    for (var i=0; i<str.length; i++) {
        
    }

    console.log(newObj)

};
console.log( letterCount('Today is the greatest day ever!') );