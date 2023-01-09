"use strict";
function solveEquation(a, b, c) {
  let arr;
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return (arr = []);
  }
  if (d === 0) {
    let x = -b / (2 * a);
    return (arr = [x]);
  }
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return (arr = [x1, x2]);
  }
   
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) === true) {
    console.log('Процентная ставка введена неверно');
    return false;
  }
  if (isNaN(contribution) === true) {
    console.log('Сумма первоначального взноса введена неверно');
    return false;
  }
  if (isNaN(amount) === true) {
    console.log('Сумма кредита введена неверно');
    return false;
  }
  let monthPercent = percent / 100 / 12;  
  let debt = amount - contribution;       
  let monthlyFee = debt * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1))); 
  let totalAmount = parseFloat((monthlyFee * countMonths).toFixed(2));

  return totalAmount;
}