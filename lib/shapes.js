class Shape {
    constructor(text, font, color, bgcolor) {
        this.text = text;
        this.font = font;
        this.color = color;
        this.bgcolor = bgcolor;
    }
}

class Triangle extends Shape {
    constructor(text, font, color, bgcolor) {
        super(text, font, color, bgcolor);
        this.type = "triangle";
        this.font = `text x="100" y="150" font-size="40" textLength="100"`;
        this.render = `polygon points="150,0 250,200 50,200"`;
    }
}

class Square extends Shape {
    constructor(text, font, color, bgcolor) {
        super(text, font, color, bgcolor);
        this.type = "square";
        this.font = `text x="100" y="150" font-size="40" textLength="100"`;
        this.render = `rect x="50" y="0" rx="20" ry="20" height="200" width="200"`;
    }
}

class Circle extends Shape {
    constructor(text, font, color, bgcolor) {
        super(text, font, color, bgcolor);
        this.type = "circle";
        this.render = `circle r="100" cx="150" cy="100"`;
    }
}

function renderShape(shape) {
    if (shape.type = "square") { const logo = new Square };
    if (shape.type = "circle") { const logo = new Circle };
    if (shape.type = "triangle") { const logo = new Triangle };
    
    return ``
    console.log(`This is a rendering of a ${this.bgcolor} ${this.shape} with ${this.text} written inside of it in ${this.color}`);
}

module.exports = Shape, { Triangle, Square, Circle, renderShape };