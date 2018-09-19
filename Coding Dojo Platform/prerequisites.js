//  Write a program that would print all the numbers from 1 to 255
function oneto255() {
    for (var a = 0; a < 256; a++) {
        console.log(a);
    }
}
// oneto255();

//Write a program that would print all the odd numbers from 1 to 1000
function odd1to1000() {
    for (var a = 0; a < 1001; a++) {
        if (a % 2 == 1) {
            console.log (a);
        }
    }
}
// odd1to1000();

//Write a program that would print the sum of all the odd numbers from 1 to 5000
function sumodd1to5000() {
    var total = 0;
    for (var a = 0; a < 5001; a++) {
        if (a % 2 == 1) {
            total = total + a;
        }
    }
    console.log(total);
}
// sumodd1to5000();

// Given an array X say [1,3,5,7,9,13], write a program that would iterate through each member of the array and print each value on the screen.
function iteratethrougharray() {
    var ar = [1, 3, 5, 7, 9, 13];
    for (var a = 0; a < ar.length; a++){
        console.log (ar[a]);
    }
}
// iteratethrougharray();

// Given an array with multiple values (e.g. [-3, 3, 5, 7]), write a program that prints the maximum number in the array.
function findmax() {
    var ar = [-3, 3, 5, 7];
    var max = ar[0];
    for (var a = 1; a < ar.length; a++) {
        if (ar[a] > max){
            max = ar[a];
        }
    }
    console.log(max);
}
// findmax();

// Given an array with multiple values (e.g. [1,3,5,7,20]), write a program that prints the average of the values in the array.
function findaverage() {
    var ar = [1, 3, 5, 7, 20];
    var sum = 0;
    for (var a = 0; a < ar.length; a++) {
        sum += ar[a];
    }
    console.log(sum/ar.length);
}
// findaverage();

// Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255. When the program is done, 'y' should have the value of [1, 3, 5, 7, ... 255].
function oddarray() {
    var y = [];
    for (var a = 0; a < 255; a++) {
        if (a % 2 == 1) {
            y.push(a)
        }
    }
    console.log(y);
}
// oddarray();

// Write a program that takes an array and returns the number of values in that array whose value is greater than y.For example, if array = [1, 3, 5, 7] and y = 3, after your program is run it will print 2(since there are two values in the array whose value is greater than 3).
function greaterthany() {
    var array = [1, 3, 5, 7];
    var y = 3;
    var count = 0;
    for (var a = 0; a < array.length; a++) {
        if (array[a] > y) {
            count++;
        }
    }
    console.log(count);
}
// greaterthany();

// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that squares each value in the array.  When the program is done x should have values that have been squared (e.g. [1, 25, 100, 4]).
function squarethevalue() {
    var x = [1, 5, 10, -2];
    for (var a = 0; a < x.length; a++) {
        x[a] *= x[a];
    }
    console.log(x);
}
// squarethevalue();

// Given an array x(e.g. [1, 5, 10, -2]), create an algorithm(sets of instructions) that replaces any negative number with the value of 0. 
function eliminatenegatives() {
    var x = [1, 5, 10, -2];
    for (var a = 0; a < x.length; a++) {
        if (x[a] < 0) {
            x[a] = 0;
        }
    }
    console.log(x);
}
// eliminatenegatives();

// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that prints the maximum number in the array, minimum value in the array as well as the average values in the array. 
function maxminavg() {
    var x = [1, 5, 10, -2];
    var max = x[0];
    var min = x[0];
    var sum = 0;
    for (var a = 0; a < x.length; a++) {
        if (max < x[a]) {
            max = x[a]
        }
        if (min > x[a]) {
            min = x[a]
        }
        sum += x[a];
    }
    console.log('max: ' + max + ' min: ' + min + ' avg: ' + sum/x.length);
}
// maxminavg();

// Given an array x (e.g. [1,5, 10, 7, -2]), create an algorithm (sets of instructions) that shifts each number by one (to the front).
function shiftthevalues() {
    var x = [1, 5, 10, 7, -2];
    for (var a = 1; a < x.length; a++) {
        x[a - 1] = x[a]
    }
    x[x.length - 1] = 0;
    console.log(x);
}
// shiftthevalues();

// Write a program that takes an array of numbers and replaces any number that's negative to a string called 'Dojo'.
function numbertostring() {
    var array = [-1, -3, 2];
    for (var a = 0; a < array.length; a++) {
        if (array[a] < 0) {
            array[a] = 'Dojo';
        }
    }
    console.log(array);
}
// numbertostring();

// Create an array X and fill the array with 10 values, each value being a random integer between 0 to 100. 
function randomarray() {
    var array = [];
    for (var a = 0; a < 10; a++){
        var rand = Math.floor(Math.random() * 101);
        array.push(rand);
    }
    console.log(array);
}
// randomarray();

// Write a program that takes an array of numbers and returns an array where the first and last numbers in the array have been switched.
function swapping2values() {
    var x = [2, 3, 5, 7, 6];
    var temp = x[0];
    x[0] = x[x.length - 1];
    x[x.length - 1] = temp;
    console.log(x);
}
// swapping2values();

// Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), write a program that reverses the values in the array.
function reversing() {
    var x = [-3, 5, 1, 3, 2, 10];
    var temp;
    for (var a = 0; a < Math.ceil(x.length/2); a++) {
            temp = x[a];
            x[a] = x[x.length - 1 - a];
            x[x.length - 1 - a] = temp;
            // console.log(x);
    }
    console.log(x);
}
// reversing();

// Write a program that inserts a new number X at an index Y. For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, by the end of your program array should be [1, 3, 10, 5, 7] (in other words we added '10' on index 2). 
function insertXinY() {
    var array = [1, 3, 5, 7];
    var x = 10;
    var y = 2;
    array.length += 1;
    for (var a = array.length - 1; a > y; a--) {
        array[a] = array[a - 1];
    }
    array[y] = x;
    console.log(array);
}
// insertXinY();

// Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program that removes any negative values in that array. 
function removingnegatives() {
    var array = [0, -1, 2, -3, 4, -5, 6];
    var count = 0;
    for (var a = 0; a < array.length; a++) {
        if (array[a] < 0) {
            count++;
        } else {
            array[a - count] = array[a];
        }
    }
    while (count--) {
        array.pop();
    }
    console.log(array);
}
// removingnegatives();