export default class Shape {
    constructor(text, font, color, bgcolor) {
        this.text = text;
        this.font = font;
        this.color = color;
        this.bgcolor = bgcolor;
    }
}

export class Triangle extends Shape {
    constructor(name, text, font, color, bgcolor) {
        super(text, font, color, bgcolor);
        this.type = "triangle";
    }
}

export class Square extends Shape {
    constructor(name, text, font, color, bgcolor) {
        super(text, font, color, bgcolor);
        this.type = "square";
    }
}

export class Circle extends Shape {
    constructor(name, text, font, color, bgcolor) {
        super(text, font, color, bgcolor);
        this.type = "circle";
    }
}

export function renderShape(shape) {
    console.log(`This is a rendering of a ${shape.name} with ${this.text} written inside of it and it is ${this.bgcolor}`);
}