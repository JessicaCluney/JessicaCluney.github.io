/* 
(3 Codes)

#1
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#

*/

var arr = [1, 2, 3, 4, 5, 6, 7];
var stringyy = '#';
for(var i = 0; i < arr.length; i++) {
  console.log(stringyy.repeat(arr[i]));  //str.repeat(count);
};// 

/* #2
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (var i = 1; i <= 100; i++) {
  var f = i % 3 === 0, b = i % 5 === 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}

/* #3
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/

var arr = [1, 2, 3, 4];
var stringy = '# ';
var stringy2 = ' #';
for(var i = 0; i < arr.length; i++) {
  if(i % 2 === 0){
  console.log(stringy.repeat(arr.length));
  }
  else {
    console.log(stringy2.repeat(arr.length));//4 x 4 rows of # evry other line indented
  }
};
