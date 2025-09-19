/*
Design Spreadsheet
Difficulty: Medium
Language: JavaScript
Runtime: 67 ms
Memory: 73.7 MB
Submitted: 2025-09-19T22:53:40.588Z
Link: https://leetcode.com/problems/design-spreadsheet/submissions/1776513456/?envType=daily-question&envId=2025-09-19
*/

class Spreadsheet {
  constructor(rows) {
    // Rows are fixed at initialization, but not directly used here
    this.cellValues = new Map();
  }

  setCell(cell, value) {
    this.cellValues.set(cell, value);
  }

  resetCell(cell) {
    this.cellValues.set(cell, 0);
  }

  getValue(formula) {
    // Remove '='
    formula = formula.substring(1);

    // Split by '+'
    const operands = formula.split("+");
    const leftOperand = operands[0];
    const rightOperand = operands[1];
    let result = 0;

    // Process left operand
    if (!isNaN(parseInt(leftOperand))) {
      result += parseInt(leftOperand);
    } else {
      result += this.cellValues.get(leftOperand) ?? 0;
    }

    // Process right operand
    if (!isNaN(parseInt(rightOperand))) {
      result += parseInt(rightOperand);
    } else {
      result += this.cellValues.get(rightOperand) ?? 0;
    }

    return result;
  }
}

