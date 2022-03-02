module.exports = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() { return this.width * this.height }
    get diagonal() { return Math.sqrt((this.width ** 2) + (this.height ** 2)) }
    get perimeter() { return (this.width * 2) + (this.height * 2) }
}