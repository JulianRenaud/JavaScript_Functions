// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 0; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }

}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {

    if (age >= 16) {
        console.log(`Congrats ${userName}, you can drive!`);
    }
    else{
        console.log(`Sorry ${userName}, but you need to wait until you're 16`);
    }


}
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y) {
    if (x > 0 && y > 0){
        return "Quadrant 1";
    }
    else if (x < 0 && y > 0){
        return "Quadrant 2";
    }
    else if (x < 0 && y < 0){
        return "Quadrant 3";
    }
    else if (x > 0 && y < 0){
        return "Quadrant 4";
    }
    else if (x == 0 && y != 0) {
        return "X Axis";
    }
    else if (x != 0 && y == 0){
        return "Y Axis";
    }
    else {
        return "Origin";
    }
}
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isValidTriangle(a, b, c){
    return a + b > c && a + c > b && b + c > a;
}

// Exercise 5 Section
console.log("EXERCISE 5 --BONUS--:\n==========\n");

console.log("not doing this");