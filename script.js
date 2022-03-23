let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
       switch(e.target.innerText) {
           case 'C':
               display.innerText = '';
                break;
                case '←': 
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
            break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
        default:
            display.innerText += e.target.innerText;
       }
    })
})

// function add(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }
// // declare number
// let number = 0;

// // function to add 
// function add(input) {
//     number += input
//     return number
// }

// //add five to number
// add(5);

// // display number
// console.log(number);

// // function to subtract
// function subtract(input) {
//     number -= input
//     return number
// }

// // subtract 3
// subtract(3);

// // display result
// console.log(number);

// // function to multiply
// function multiply(input) {
//     number *= input
//     return number
// }

// // multiply 2
// multiply(2);

// // display result
// console.log(number);

// // function to divide
// function divide(input) {
//     number /= input
//     return number
// }

// // divide by 2 
// divide(2);

// // display result
// console.log(number);

// operate()

// console.log(number)
