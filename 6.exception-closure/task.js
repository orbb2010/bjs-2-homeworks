function parseCount(numToParse) {
    if (isNaN(Number.parseFloat(numToParse)))
        throw new Error('Невалидное значение');
    else
        return Number.parseFloat(numToParse);
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
        if ((this.side1 + this.side2) < this.side3) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return side1 + side2 + side3;
    }

    get area() {
        return (Math.sqrt((1 / 2 * (side1 + side2 + side3)) * ((1 / 2 * (side1 + side2 + side3)) - side1) * (1 / 2 * (side1 + side2 + side3)) - side2) * (1 / 2 * (side1 + side2 + side3)) - side3).toFixed(3);
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle;
    }
    catch (error) {
        console.log(error);
        return (new Triangle.area, new Triangle.perimeter, 'Треугольник не существует');
    }
}