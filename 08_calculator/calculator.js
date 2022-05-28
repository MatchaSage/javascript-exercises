const add = function(...args) {
  let answer = 0;
  args.forEach(arg => {
    answer += arg;
  });
  return answer;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(...args) {
	let answer = 0;
  args.forEach(arg => {
    
    if (typeof(arg) === 'object'){
      arg.forEach(num => {
        answer += num;
      });
    }
    
    else {
      answer += arg;
    }
  });
  return answer;
};

const multiply = function(array) {
  let answer = array.reduce(function(total, currentNumber){
    //Reduce must return a number, the returned number becomes the new total
    return total * currentNumber;
  });
  return answer;
};

const power = function(num1 , num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let answer = 1
  for (let i = 1; num > i; num--) {
    answer *= num;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
