// ou are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

//accepted solution on leetcode
const calPoints = (operations) => {
  let recordArr = [];

  for (let item of operations) {
    switch (item) {
      case "C":
        recordArr.pop();
        break;
      case "D":
        recordArr.push(recordArr[recordArr.length - 1] * 2);
        break;
      case "+":
        recordArr.push(
          recordArr[recordArr.length - 1] + recordArr[recordArr.length - 2]
        );
        break;
      default:
        recordArr.push(Number(item));
        break;
    }
  }

  return recordArr.reduce((acc, curr) => acc + curr, 0);
};

console.log(calPoints(["5","2","C","D","+"]))

// valid parenthesis

const validParenthesis = (s) => {
  const stack = []
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for(const char of s){
    if(char in map ){
      stack.push(char)
    }else{
      const last = stack.pop()
      if(map[last] !== char){
        return false
      }
    }
  }

  return stack.length === 0
}

console.log(validParenthesis("([])"))