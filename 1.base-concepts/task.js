"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d;
  d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr[0] = - b / (2 * a);
  } else {
    arr[0] = (- b + Math.sqrt(d) )/(2 * a);
    arr[1] = (- b - Math.sqrt(d) )/(2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let convertedPercent = percent / 100;
  let monthlyPercent = convertedPercent / 12;
  let sumToReturn = amount - contribution;
  let monthlyPaiage = sumToReturn * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  let totalPaiage = monthlyPaiage * countMonths;
  let result = +totalPaiage.toFixed(2);
  return result;
}