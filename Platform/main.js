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