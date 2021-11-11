"use strict";
const parseArguments = (args) => {
    if (args.length < 4)
        throw new Error('Not enough arguments');
    if (args.length > 4)
        throw new Error('Too many arguments');
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        };
    }
    else {
        throw new Error('Provided values were not numbers!');
    }
};
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
    const { value1, value2 } = parseArguments(process.argv);
    // const a: number = Number(process.argv[2]);
    // const b: number = Number(process.argv[3]);
    console.log(calculator(value1, value2, 'divide'));
}
catch (error) {
    // console.log('Something went wrong');
    // throw error;
    if (error instanceof Error) {
        console.log(error.message);
    }
}
