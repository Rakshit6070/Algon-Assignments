/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) throw new Error("Cannot divide by zero");
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    try {
      
      const cleaned = expression.replace(/\s+/g, '');

      
      if (/[^0-9+\-*/().]/.test(cleaned)) {
        throw new Error("Invalid characters in expression");
      }

      
      const evalResult = Function(`return (${cleaned})`)();

      
      if (typeof evalResult !== 'number' || !isFinite(evalResult)) {
        throw new Error("Invalid arithmetic operation");
      }

      this.result = evalResult;
    } catch (err) {
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;

const calc = new Calculator();

calc.add(5);
calc.multiply(2);
console.log(calc.getResult()); 

calc.clear();
calc.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");
console.log(calc.getResult()); 

try {
  calc.calculate("5 + abc");
} catch (e) {
  console.log(e.message); 
}
