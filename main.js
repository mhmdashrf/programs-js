// 1- Write a program that allow to user enter number then print it--------start---------- //

// var numberUser = Number(prompt("Enter Your Number"));

// document .getElementById("print").innerHTML = numberUser;


// 1- Write a program that allow to user enter number then print it--------end---------- //



// 2- Write a program that take number from user then print yes if that number can divide by 3
             // and 4 otherwise print no -------------start-----------//

// var numberDivide = +prompt("Enter Your Number");

// if((numberDivide%3 == 0) && (numberDivide%4 == 0) ){
//     document.getElementById("print").innerHTML="Yes";
// }else{
//     document.getElementById("print").innerHTML="No";
// }

// 2- Write a program that take number from user then print yes if that number can divide by 3
             // and 4 otherwise print no -------------end-----------//.


 //  3- Write a program that allows the user to insert 2 integers then print the max.----------start-------->
// var firstNum = Number (prompt("Enter Your First Number"));
// var secondNum = Number (prompt("Enter Your second Number"));

// if (firstNum>secondNum) {
//     document.getElementById("print").innerHTML = firstNum;
    
// } else if (firstNum<secondNum) {
//     document.getElementById("print").innerHTML = secondNum;
// }
// else{
//     document.getElementById("print").innerHTML = firstNum;
// }
 //  3- Write a program that allows the user to insert 2 integers then print the max.----------end-------->


 //  4- Write a program that allows the user to insert an integer then print negative if it is
 //  negative number otherwise print positive-------------------start-------------------------->

//  var posNeg = +prompt("Enter Your Number");

//  if (posNeg >= 0) {
//     document.getElementById("print").innerHTML="Positive";
//  }else{
//     document.getElementById("print").innerHTML="negative";
//  }

 //  4- Write a program that allows the user to insert an integer then print negative if it is
 //  negative number otherwise print positive-------------------end-------------------------->

//  5- Write a program that take 3 integers from user then print the max element
//  and the min element.------------start------------------->

// var firstint = +prompt("Enter First Number");
// var secondint = +prompt("Enter second Number");
// var thirdint = +prompt("Enter third Number");

// if ((firstint>thirdint) && (firstint>secondint)) {
//     document.getElementById("print").innerHTML = firstint;
// }

// else if ((secondint>firstint) && (secondint>thirdint)){
//     document.getElementById("print").innerHTML = secondint;
// }

// else if ((thirdint>firstint)&&(thirdint>secondint)){
//     document.getElementById("print").innerHTML = thirdint;
// }
// else{
//     document.getElementById("print").innerHTML = firstint;
// }

// if ((firstint<thirdint) && (firstint<secondint)) {
//     document.getElementById("print2").innerHTML = firstint;
// }

// else if ((secondint<firstint) && (secondint<thirdint)){
//     document.getElementById("print2").innerHTML = secondint;
// }

// else if ((thirdint<firstint)&&(thirdint<secondint)){
//     document.getElementById("print2").innerHTML = thirdint;
// }
// else{
//     document.getElementById("print").innerHTML = firstint;
// }
//  5- Write a program that take 3 integers from user then print the max element
//  and the min element.------------end------------------->

// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd--------------start------------------->

// var typeNum = +prompt("Write Your Number");
// if (typeNum%2 === 0) {
//     document.getElementById("print").innerHTML = " Even";
// }
// else{
//     document.getElementById("print").innerHTML = " Odd";
// }

// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd--------------end------------------->

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant-----------------------start------------------>

// var charsVowel = prompt("Enter Your Chars");

// if ((charsVowel == "a") || (charsVowel == "e") || (charsVowel == "l") || (charsVowel == "o") ||  (charsVowel == "u")) {

//     document.getElementById("print").innerHTML = "vowel";
    
// } else {
//     document.getElementById("print").innerHTML = "Consonant";
// }

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant-----------------------end------------------>

// 9- Write a programthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// that’s number-----------------------------------start------------------------>

// var atherNum = +prompt("Write Your Number")

// for( var i = 1 ; i <= atherNum ; i++ ){
//     document.write (i +",") ;
    
//     console.log(i);
// }

// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// that’s number-----------------------------------end------------------------>

// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.-----start------>
// var num = +prompt("Enter Your Number");
// for(var i = 1;i<=12 ;i++){
//    document.write(num*i+",")
// }

// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.-----end------>

// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this number---------------start-------------------->

//  var evenNum = +prompt("Enter Your Number");
//  for(var i= 2  ; i<evenNum ; i+= 2  ){
//     document.write(i+",")
//  }
// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this number---------------end-------------------->

// 12- Writeaprogramthattaketwointegersthenprintthepower --------------------start----------->

// var firstNumber = +prompt("Enter Your first Number");
// var secondNumber = +prompt("Enter Your socond Number");
// var num = 1
// for(var i = 0 ; i < secondNumber ; ++i ){
//     num = num * firstNumber;
// }
// document.write(num);
    
// 12- Writeaprogramthattaketwointegersthenprintthepower --------------------end----------->

// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.------------------start-------------------->
// var firsubject = +prompt("first subject");
// var secsubject = +prompt("secound subject");
// var thisubject = +prompt("third subject");
// var fousubject = +prompt("fourth subject");
// var fifsubject = +prompt("fifth subject");

// var total = firsubject +secsubject +thisubject +fousubject +fifsubject;
// document.write("total ="+total+"<br>");
// sum=total/5;
// document.write("Average ="+sum+"<br>");
// var percentage = total/500 *100;
// document.write("Percentage ="+percentage+"<br>");

// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.------------------end-------------------->

// 13-Write a program to input month number and print number of days in that
// month.-------------------------------start------------------------>

// var month = +prompt("Enter Month");

// if ((month == 1) || (month == 3) || (month == 5) || (month == 7 ) || (month == 8 ) || (month == 10) || (month == 12)) {
//     document.getElementById("print").innerHTML = "days is = 31";
// }
// else if((month == 4 ) || (month == 6 ) || (month == 9 ) || (month == 11)){
//     document.getElementById("print").innerHTML = "days is = 30";
// }
// else if((month == 2 )){
//     document.getElementById("print").innerHTML = "days is = 28";
// }
// else{
//     document.getElementById("print").innerHTML = "this not month";
// }

// 13-Write a program to input month number and print number of days in that
// month.-------------------------------start------------------------>

// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade-----------------start------------------->

// var Physics = +prompt("Enter Your Physics Grade");
// var Chemistry = +prompt("Enter Your Chemistry Grade");
// var Biology = +prompt("Enter Your Biology Grade");
// var Mathematics = +prompt("Enter Your Mathematics Grade");
// var Computer = +prompt("Enter Your Computer Grade");

// var total = Physics+Chemistry+Biology+Mathematics+Computer;

// var percentage = total/500 *100;

// if (percentage >= 90) {
//    document.write( "Grad A :" +percentage+"%");
// }
// else if (percentage >= 80){
//     document.write( "Grad B :" +percentage+"%");
// }
// else if (percentage >= 70){
//     document.write( "Grad C :" +percentage+"%");
// }
// else if (percentage >= 60){
//     document.write( "Grad D :" +percentage+"%");
// }
// else if (percentage >= 40){
//     document.write( "Grad E :" +percentage+"%");
// }
// else if (percentage < 40){
//     document.write( "Grad F :" +percentage+"%");
// }
// else{
//     document.write( "error");
// }
// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade-----------------end------------------->;


//-----------------------------------using switch case------------------------------------------->


// 15- Write a program to print total number of days in month----------start------------>
// var months = prompt("Enter your month");

// switch (months) {
//     case "1":
//         case "3":
//             case "5":
//         case "7":
//             case "8":
//         case "10":
//             case "12":
//             document.getElementById("print").innerHTML = "days is = 31";
//         break;
//         case "4":
//          case "6":
//          case "9":
//          case "11":
//         document.getElementById("print").innerHTML = "days is = 30";
//         break;
//         case "2":
//             document.getElementById("print").innerHTML = "days is = 28"; 
//             break;    
//     default:
//         document.getElementById("print").innerHTML = "this not month"; 
//         break;
// }

// 15- Write a program to print total number of days in month----------end------------>

// 16- Write a program to check whether an alphabet is vowel or consonant----------------------start------------------>

// var letters = prompt("Enter letters");

// switch (letters) {
//     case "o":
//     case "u":
//     case "l":
//     case "e":
//     case "a":

//         document.getElementById("print").innerHTML = "vowel"
//         break;

//     default:
//         document.getElementById("print").innerHTML = "consonant"
//         break;
// }

// 16- Write a program to check whether an alphabet is vowel or consonant----------------------end------------------>

// 17- Write a program to find maximum between two numbers-----------------------------------start------------------>
//  var firstnum = prompt("Enter first num");
//  var socondnum = prompt("Enter socond num");

//  switch (true) {
//     case firstnum > socondnum :
//         document.getElementById("print").innerHTML = firstnum;
//         break;
//         case socondnum > firstnum :
//             document.getElementById("print").innerHTML = socondnum;
//             break;
 
//     default:
//         break;
//  }

// 17- Write a program to find maximum between two numbers-----------------------------------end------------------>

// 18- Write a program to check whether a number is even or odd-------------------------------start-------------------->
// var evenOrOdd = +prompt ("Enter your number");

// switch (true) {
//     case evenOrOdd%2 === 0:
//         document.getElementById("print").innerHTML = "even"
//         break;

//     default:
//         document.getElementById("print").innerHTML = "Odd"
//         break;
// }

// 18- Write a program to check whether a number is even or odd-------------------------------end-------------------->

// 19- Write a program to check whether a number is positive or negative or zero-------------------------start---------->
// var negPos = +prompt ("Enter your number");

// switch (true) {
//     case negPos>=0 :
//         document.getElementById("print").innerHTML = "positive"
//         break;
//         case negPos<0 :
//             document.getElementById("print").innerHTML = "negative"
//             break;
    
//     default:
//         break;
// }

// 19- Write a program to check whether a number is positive or negative or zero-------------------------end---------->

// 20- Write a program to create Simple Calculator----------------------start--------------------------->

// var num1 = +prompt("Enter First Number");
// var operator = prompt("enter operator ");
// var num2 = +prompt("Enter First Number");
// switch (operator) {
//     case "+":
//       document.getElementById("print").innerHTML = num1+num2;
//         break;
//         case "-":
//             document.getElementById("print").innerHTML = num1-num2;
//             break;
//             case "/":
//                 document.getElementById("print").innerHTML = num1/num2;
//                 break;
//             case "*":
//                 document.getElementById("print").innerHTML = num1*num2;
//                 break;
//     default:
//         break;
// }

// 20- Write a program to create Simple Calculator----------------------end--------------------------->