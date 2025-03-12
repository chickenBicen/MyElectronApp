function add(int) {
  let val = document.getElementById("result").value;
  let lastChar = val[val.length - 1];

  // Check if the last character in the result is an operator
  let skip = ['*', '/', '+', '-','='].includes(lastChar);

  // Prevent adding an operator if the last character is already an operator
  if (skip && ['*', '/', '+', '-','='].includes(int)) {
      return;
  }

  // Append operators with spaces for readability
  if (['*', '/', '+', '-', '=','(',')'].includes(int)) {
    document.getElementById("result").value += " " + int + " ";
  }
  else {
    document.getElementById("result").value += int;
  }
}

function solve(){
  let expression = document.getElementById("result").value;
  const solver = new Solver(expression);
  solver.solveExpression();
  document.getElementById("result"). value = solver.toString();

}

function clear() {
  document.getElementById("result").value = "";
}

class Solver {
  constructor(expression) {
    this.ex = expression.split(' ');
  }

  solveExpression() {
    // Step 1: Handle parentheses first
    while (this.ex.includes("(")) {
      this.processParentheses();
    }

    // Step 2: Handle multiplication and division
    this.processOperations(["*", "/"]);

    // Step 3: Handle addition and subtraction
    this.processOperations(["+", "-"]);
  }

  processParentheses() {
    let openIndex = -1;
    let closeIndex = -1;

    // Find the innermost '(' and matching ')'
    for (let i = 0; i < this.ex.length; i++) {
      if (this.ex[i] === "(") openIndex = i;
      if (this.ex[i] === ")" && openIndex !== -1) {
        closeIndex = i;
        break;
      }
    }

    if (openIndex === -1 || closeIndex === -1) {
      console.error("Unbalanced parentheses.");
      return;
    }

    // Extract sub-expression within parentheses
    let subExpression = this.ex.slice(openIndex + 1, closeIndex).join(" ");
    let solver = new Solver(subExpression);
    solver.solveExpression();

    // Replace the parentheses with the solved result (converted to a number)
    this.ex.splice(openIndex, closeIndex - openIndex + 1, solver.ex[0]);
  }

  processOperations(ops) {
    const operators = {
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
      "+": (a, b) => a + b,
      "-": (a, b) => a - b
    };

    for (let i = 0; i < this.ex.length; i++) {
      if (ops.includes(this.ex[i])) {
        // Make sure operands are valid numbers before applying the operation
        let operand1 = parseFloat(this.ex[i - 1]);
        let operand2 = parseFloat(this.ex[i + 1]);

        if (isNaN(operand1) || isNaN(operand2)) {
          console.error("Invalid operands:", this.ex[i - 1], this.ex[i + 1]);
          return;
        }

        let result = operators[this.ex[i]](operand1, operand2);
        this.ex.splice(i - 1, 3, result.toString());
        i--; // Adjust index after modification
      }
    }
  }

  toString() {
    return `${this.ex.join(" ")} = ${this.ex[0]}`;
  }
}

// Example usage:
let solver = new Solver("3 + ( 2 * 5 )");
solver.solveExpression();
console.log(solver.toString()); // Should print the result after solving the expression
