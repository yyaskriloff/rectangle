module.exports = class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() { return this.width * this.height }
    get diagonal() { return Math.sqrt((this.width ** 2) + (this.height ** 2)) }
    get perimeter() { return (this.width * 2) + (this.height * 2) }
}