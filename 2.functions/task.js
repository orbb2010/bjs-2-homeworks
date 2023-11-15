function getArrayParams(...arr) {
  if (arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
} else return 0; 
}


function summElementsWorker(...arr) {
  if (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
} else return 0; 
}

function differenceMaxMinWorker(...arr) {
  if (arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }    
  }
  let difference = max - min;
  return difference;
}  else return 0;
}


function differenceEvenOddWorker(...arr) {
  if (arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let diffEvenOdd = sumEvenElement - sumOddElement;
  return diffEvenOdd;
} else return 0; 
}

function averageEvenElementsWorker(...arr) {
  if (arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }    
  }  
  return +(((sumEvenElement / countEvenElement)).toFixed(2));
} else return 0; 
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let arrElements = [...arrOfArr];
  let funcResult;
  for (let i = 0; i < arrElements.length; i++) {
    funcResult = func(arrElements[i]);
    } 
  if (funcResult > maxWorkerResult) {
    funcResult = maxWorkerResult;
  } 
  return funcResult;
  }


