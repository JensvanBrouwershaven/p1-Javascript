let num1;
let num2;
let answer;
let answer2;
let num3;
let num5;
let num6;
let answer3;
let seconds;
let minutes;

const calculator = function(num1, num2) {
    answer = num1 + num2
    console.log(answer);
}
const times5 = function(num3) { 
    answer2 = num3 * 5
    console.log(answer2);
}

const logger = function (num5, num6) {
    if (num5 > num6){
        console.log(num5);
    }
    else {
    console.log(num6);
    }
}

const Minute = function (seconds) {
    minutes = seconds / 60
    console.log(minutes);
}

calculator(69,420);
times5(7)
logger(4,7)
Minute(400)