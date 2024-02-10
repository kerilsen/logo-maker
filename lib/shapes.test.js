const { Triangle, Square, Circle, renderShape } = require('./shapes.js');

const config = {
    transformIgnorePatterns: [
        '<rootDir>/node_modules/',
    ],
};

test('render a triangle', () => {
    const triangle = new Triangle("triangle", "JJM", "sagegreen", "navy");
    const shape = triangle.render();
    expect(shape).toMatch(
        `<polygon points="150,0 250,200 50,200" fill="var(--navy)" />
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="var(--sagegreen)">JJM</text>`
    )
})

test('render a square', () => {
    const square = new Square("square", "DSM", "cream", "red");
    const shape = square.render();
    expect(shape).toMatch(
        `<rect x="50" y="0" rx="20" ry="20" height="200" width="200" fill="var(--red)" />
        <text x="150" y="135" font-size="80" text-anchor="middle" fill="var(--cream)">DSM</text>`
    )
})

test('generate a circle logo', () => {
    const shape = {
        "type": "circle",
        "text": "KLS",
        "color": "navy",
        "bgcolor": "lightblue"
    }
    const logo = renderShape(shape);

    expect(logo).toMatch(
        `<circle r="100" cx="150" cy="100" fill="var(--lightblue)" />
        <text x="150" y="125" font-size="80" text-anchor="middle" fill="var(--navy)">KLS</text>`
    );
})

module.exports = config;