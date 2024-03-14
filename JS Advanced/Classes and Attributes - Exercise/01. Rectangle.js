class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let myRectangle = new Rectangle(4, 5, 'Red');
console.log(myRectangle.width);
console.log(myRectangle.height);
console.log(myRectangle.color);
console.log(myRectangle.calcArea());