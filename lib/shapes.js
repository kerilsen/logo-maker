class Shape {
    constructor(type, text, color, bgcolor) {
        this.type = type;
        this.text = text;
        this.color = color;
        this.bgcolor = bgcolor;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,0 250,200 50,200" fill="var(--${this.bgcolor})" />
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="var(--${this.color})">${this.text}</text>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="0" rx="20" ry="20" height="200" width="200" fill="var(--${this.bgcolor})" />
        <text x="150" y="135" font-size="80" text-anchor="middle" fill="var(--${this.color})">${this.text}</text>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle r="100" cx="150" cy="100" fill="var(--${this.bgcolor})" />
        <text x="150" y="125" font-size="80" text-anchor="middle" fill="var(--${this.color})">${this.text}</text>`;
    }
}

function renderShape(shape) {
    let logo;
    switch (shape.type) {
        case 'square': logo = new Square(shape.type, shape.text, shape.color, shape.bgcolor);
            break;
        case 'triangle': logo = new Triangle(shape.type, shape.text, shape.color, shape.bgcolor);
            break;
        case 'circle': logo = new Circle(shape.type, shape.text, shape.color, shape.bgcolor);
            break;
        default: console.log("Error defining shape");
    };
    const shapeRender = logo.render();
    const generate =
        `<svg width="300" height="200">
    <style>
    :root {
        --lilac: rgb(189, 181, 218);
        --palepink: rgb(248, 229, 238);
        --periwinkle: rgb(211, 218, 240);
        --paleyellow: rgb(255, 221, 134);
        --lightblue: rgb(218, 235, 243);
        --navy: rgb(0, 87, 124);
        --cream: rgb(254, 244, 238);
        --peach: rgb(248, 206, 193);
        --sagegreen: rgb(222, 235, 231);
        --red: rgb(229, 36, 32);
        --purple: rgb(206, 136, 186);
        --white: rgb(251, 245, 248);
        --orange: rgb(248, 174, 83);
    }
    </style>
  ${shapeRender}
    </svg>`;
    (console.log(typeof generate));
    return generate;
}

module.exports = { Triangle, Square, Circle, renderShape };