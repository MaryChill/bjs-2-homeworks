function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
  }
  let avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let differenceMaxMin;
  if (arr.length > 0) {
  differenceMaxMin = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  } else {
    differenceMaxMin = 0;
  }
  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  
  } else {
    return 0;
  }
  
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
 for (let i = 0; i < arrOfArr.length; i++) {
  const resultFunc = func(...arrOfArr[i]);
  if (resultFunc > maxWorkerResult) {
    maxWorkerResult = resultFunc;
  }
}
return maxWorkerResult;
}
