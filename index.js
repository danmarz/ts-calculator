"use strict";
const calculator = (a, b, op) => {
    if (isNaN(a) || isNaN(b))
        throw new Error('Input is NaN');
    switch (op) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0)
                throw new Error('Cannot divide by zero'); // eq. to if (b === 0) { return 'Cannot divide by zero'; }
            return a / b;
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        default:
            throw new Error('Invalid operation'); // eq. to return 'Invalid operation';
    }
};
try {
    const a = Number(process.argv[2]);
    const b = Number(process.argv[3]);
    console.log(calculator(a, b, 'divide'));
}
catch (error) {
    // console.log('Something went wrong');
    // throw error;
    if (error instanceof Error) {
        console.log(error.message);
    }
}
