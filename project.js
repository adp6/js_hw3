const arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
const boolArr = ['aaa', true, 'ccc', false, 'false']
const smile = [':)', '=)',':)', '=)',':)', '=)'];
const shop =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
function evenNumbers(evenNumbersArray) {
    let arrayNew = [];
    for(let i=0; i<evenNumbersArray.length - 1; i++) {
        if((evenNumbersArray[i]%2) == 0) {
            arrayNew.push(evenNumbersArray[i]);
        }
        
    }
    return console.log(arrayNew);
} 
evenNumbers(arrRandomNumbers);

function notEvenNumbers(evenNumbersArray) {
    let arrayNew = [];
    for(let i=0; i<evenNumbersArray.length - 1; i++) {
        if((evenNumbersArray[i]%2) != 0) {
            arrayNew.push(evenNumbersArray[i]);
        }
    }
    arrayNew.sort;
    return console.log(arrayNew);
}
notEvenNumbers(arrRandomNumbers);

function add2(evenNumbersArray) {
    let arrayNew = [];
    for(let i=0; i<evenNumbersArray.length - 1; i++) {
        arrayNew.push(evenNumbersArray[i]*2)
    }
    return console.log(arrayNew);
}
add2(arrRandomNumbers);

function calc() {
    let userNumberFirst = prompt("Введіть перше число");
    let userNumberFirstInt = parseInt(userNumberFirst)
    let userNumberSecond = prompt("Введіть друге число");
    let userNumberSecondInt = parseInt(userNumberSecond);
    let calc = prompt("Введіть дію");
    let res
    switch (calc) {
        case "+":
            res = userNumberFirstInt + userNumberSecondInt;
            console.log(res)
            break;
        case "-":
            res = userNumberFirstInt - userNumberSecondInt;
            console.log(res)
            break;
        case "*":
            res = userNumberFirstInt * userNumberSecondInt;
            console.log(res)
            break;
        case "/":
            res = userNumberFirstInt / userNumberSecondInt;
            console.log(res)
            break;
    }
}
calc();

function boolean(evenNumbersArray) {
    let arrayNew = [];
    for(let i=0; i<evenNumbersArray.length; i++) {
        if (evenNumbersArray[i] != true && evenNumbersArray[i] != false) {
            arrayNew.push(evenNumbersArray[i]);
        }
        
    }
    return console.log(arrayNew);
}
boolean(boolArr);

function smileArray(evenNumbersArray) {
    let arrayNew = [];
    for(let i = 0; i < evenNumbersArray.length; i++){
        if(evenNumbersArray[i] == "=)") {
            arrayNew.push(evenNumbersArray[i] = ";)");
        }
        else {
            arrayNew.push(evenNumbersArray[i]);
        }
    }
    return console.log(arrayNew);
}
smileArray(smile);

function shopArray(evenNumbersArray) {
    let arrayNew = [];
    let userData = prompt();
    let last = evenNumbersArray.length-1;
    switch(userData) {
        case evenNumbersArray[last]:
            arrayNew.push(evenNumbersArray.pop());
            console.log(evenNumbersArray);
            console.log(arrayNew);
            break;
        case evenNumbersArray[0]:
            arrayNew.push(evenNumbersArray.shift());
            console.log(evenNumbersArray);
            console.log(arrayNew);
            break;
    }
}
shopArray(shop);