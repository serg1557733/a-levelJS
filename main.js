
//hw1
const newArr = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

console.log(newArr.join(' | '));

//hw2
const str =  'Вася;Петя;Вова;Олег';

console.log(str.split(';'));

//hw3
function hello2(name) {
    console.log(`Привет, ${name}`);
}

console.log(hello2('Serg'));

//hw4
const fruits = ['яблоко', 'ананас', 'груша'];

let fruitsInUpperCase = fruits.map( item => item.toUpperCase());

console.log(fruitsInUpperCase);

//hw5

function addOneForAll(...arg) {
    return arg.map(item => item+ 1); 
}
const val = addOneForAll(1, 2, 3, 4);

console.log(val);


//hw6
function getSum(...num) {
    return num.reduce((acc, current) => acc + current); 
}

const sum = getSum(1, 2, 3, 4);

console.log(sum);

//hw7
const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

const numberArray = arr.filter(item => typeof(item) === 'number');

console.log(numberArray);

//hw8

function  arrayTesting (arr){

    let elem = arr.find(elem => !!elem == true) //finding all value logic true, or if we need just 1 or true use elem => elem == true
    if (elem !== undefined) {
    return console.log(`Нашли true значение и оно равно - ${elem}`);
    } else {
        return console.log(`В массиве нет true значений`);  
    }
}

const haveTrueValue = arrayTesting([0, true,  false, null, 1]);
console.log(haveTrueValue);

const dontHaveTrueValue = arrayTesting([0, false, null, 0]);
console.log(dontHaveTrueValue);
