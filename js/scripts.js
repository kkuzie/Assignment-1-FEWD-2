// STEP 1

// Convert the following identifiers to Camel Case notation:var some_month;function the Month();var current-month;var summer_month;var MyLibrary-function

// var someMonth;
// function theMonth();
// var currentMonth;
// var summerMonth;
// var MyLibraryFunction;

// STEP 2

// Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

// 12.6, 1920, -612 // numeric literal 
// "My six dogs" // string literal 
// true, false // Boolean literal 
    // example:
    // var k = 6;
    // var a = 12;
    // var r = 6;
    // (k == r)       // Returns true
    // (k == a)       // Returns false
// null // null literal - null is nothing

// STEP 3

// Give me two examples of complex / variable expressions.

// complex / variable expression
// let myPets = myDogs + myCats + myPossoms;
// let complexExp = 6 * (12 / 2) + 3;

// STEP 4

// Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.

// let firstName;
// let lastName;
// let strAddress;
// let city;
// let state;
// let numZipCode;
// let numYourAge;
// let referralSource;
// let mayWeContactYou;

// STEP 5

// Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.

// method 1
// let firstName;
// let lastName;
// let strAddress;
// let city;
// let state;
// let numZipCode;
// let numYourAge;
// let referralSource;
// let mayWeContactYou;
// firstName = "Kar";
// lastName = "Kuz";
// strAddress = "612 June Way";
// city = "Fav City";
// state = "CA";
// numZipCode = 12620;
// numYourAge = 99;
// referralSource = "friend";
// mayWeContactYou = "no";

// method 2
// let firstName = "Kar";
// let lastName = "Kuz";
// let strAddress = "612 June Way";
// let city = "Fav City";
// let state = "CA";
// let numZipCode = 12620;
// let numYourAge = 99;
// let referralSource = "friend";
// let mayWeContactYou = "no";

// method 3
// let firstName = "Kar", lastName = "Kuz", strAddress = "612 June Way", city = "Fav City", state = "CA", numZipCode = 12620, numYourAge = 99, ReferralSource = "friend", mayWeContactYou = "no";

// STEP 6

// Create a variable. Add a number and a string and display the coerced result in the browser’s console window. 

// let myNumStrCoercion;
// myNumStrCoercion = 6 + "12";
// window.console.log(myNumStrCoercion);
// coerced value returns 612
 
// STEP 7

// Create two variables. For the first variable, add a Boolean and a string and display the coerced result. For the second variable, add a number and a Boolean and display the coerced result. 

// let varOne = (10 > 1) + "Kar"; // returns trueKar because booleans convert to strings when added with a string
// window.console.log(varOne);

// let varTwo = 12 + (3 >= 3); // returns 13 because 12 (a number) plus 3>=3 (is true and true always = 1 this is because booleans convert to numbers when added with a number)
// window.console.log(varTwo);

// STEP 8

// Is the following string literal valid? 
// no

// If not, how would you fix it?
// var someString = 'Who once said, \"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.\"';
// window.console.log(someString);

// STEP 9

// Create a variable that produces a null value in the console window. Create a variable that produces an undefined value in the console window.

// let myNull = "Kar";
// myNull = null;
// let myUndefined;
// window.console.log(myNull, myUndefined);

// STEP 10

// Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

// let myPets = 'dogs, cats, and possums'; 
// // inputing typeof myPets; returns string
// let myCritters = 10;
// // inputting typeof myCritters; returns number
// let myDogs = 6 > 2;
// // unputting typeof myDogs; returns Boolean
// let myAnimals = {dogs:10, cats:2, possums:2};
// // inputting typeof myAnimals; returns object
// let myPups;
// // inputting typeof myPups; returns undefined

// STEP 11

// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: Hello Zak Ruvalcaba, welcome to the JavaScript class!Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.

// alert('Hello ' + 'Karen' + ', welcome to the JavaScript class!');

// STEP 12

// Declare a variable called name and set it equal to your name. Substitute your name in the previous alert string with the variable instead.

// let name = "Karen";
// alert('Hello ' + name + ', welcome to the JavaScript class!');

// STEP 13

// Declare a variable called course and set it equal to “JavaScript”. Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

// let name = "Karen";
// let course = "Javascript";
// alert('Hello ' + name + ', welcome to the ' + course + ' class!')

// STEP 14

// Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:Hello Zak Ruvalcaba.Welcome to the JavaScript class!

// let name = "Karen";
// let course = "Javascript";
// alert('Hello ' + name + '.\n' + 'Welcome to the ' + course + ' class!');

// STEP 15

// Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 

// let yourname = prompt("What is your name?");
// let course = "Javascript";
// alert('Hello ' + yourname + '.\n' + 'Welcome to the ' + course + ' class!');

// STEP 16

// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

// let yourname = prompt("What is your name?");
// let yourcourse = prompt("What course are you taking?");
// alert('Hello ' + yourname + '.\n' + 'Welcome to the ' + yourcourse + ' class!');

// STEP 17

// Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. Display the sum of those two numbers in the console window. 

// let x = 10;
// let y = 20;
// window.console.log(x + y);

// STEP 18

// Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable and display the result in the console window.The result should be 40.

// let x = 20;
// window.console.log(x += 20);

// STEP 19

// Declare a variable called x and assign it a value of 20.Multiply and assign 5 to that variable and display the result in the console window. The result should be 100.

// let x = 20;
// window.console.log(x *= 5);

// STEP 20

// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.Divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.

// let x = parseInt(20 % 3);
// window.console.log(x /= 1);

// STEP 21

// Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

// let k = 5; 
// let z = 10; 
// window.console.log(k <= 5 && z >= 10); 

// STEP 22

// Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

// let n = 123;
// let j = 73;
// window.console.log(n == 312 || j == 37);

// STEP 23

// Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.

// let widget = new Object();

// STEP 24

// Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.

// let widget = new Object();
// window.console.log(widget instanceof Object);

// STEP 25

// Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.

// let widget = new Object();
// window.console.log(!widget instanceof Object);
