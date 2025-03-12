function add(int) {
  let val = document.getElementById("result").value;
  let lastChar = val[val.length - 1];

  // Check if the last character in the result is an operator
  let skip = ['*', '/', '+', '-'].includes(lastChar);

  // Prevent adding an operator if the last character is already an operator
  if (skip && ['*', '/', '+', '-'].includes(int)) {
      return;
  }

  // Append operators with spaces for readability
  if (['*', '/', '+', '-'].includes(int)) {
      document.getElementById("result").value += " " + int + " ";
  } else {
      document.getElementById("result").value += int;
  }
}


class Solver{
    constructor(expression){
      ex = expression.split(' ')
    }
}
