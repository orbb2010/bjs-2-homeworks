function parseCount(numToParse) {
  let result = Number.parseFloat(numToParse);
  if (isNaN(result)) {
  throw new Error('Невалидное значение');
  } else {
    return result;
  }
}

function validateCount(numToParse) {
  try {
    return parseCount(numToParse);
    }
  catch (error) {
    console.log(error);
    return error;
  }
}

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
      if (((side1 + side2) < side3) || ((side1 + side3) < side2) || ((side2 + side3) < side1)) {
      throw new Error('Треугольник с такими сторонами не существует');
      }
    }

    get perimeter() {
      return this.side1 + this.side2 + this.side3;
    }

    get area() {
      let halfPerimeter = this.perimeter / 2;
      return +Math.sqrt(halfPerimeter * (halfPerimeter - this.side1) * (halfPerimeter - this.side2) * (halfPerimeter - this.side3)).toFixed(3);
    }
}

function getTriangle(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3);
    }
  catch (error) {
    console.error(error);
      return {
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        }, 
        get area() {
          return 'Ошибка! Треугольник не существует';
        }
      }
}
}