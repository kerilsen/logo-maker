// import Shapes, { Triangle, Square, Circle, renderShape } from './lib/shapes.js';
const inquirer = require('inquirer');
const fs = require('fs');
 
// const render = require('./lib/shapes.js');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: [
            'Triangle ▲',
            'Square ◼️',
            'Circle ⏺',
        ],
        filter(val) {
            string = val.slice(0, -2);
            return string.toLowerCase();
        }
    },
    {
        type: 'list',
        name: 'bgcolor',
        message: 'What color do you want your logo to be?',
        choices: [
            'Lilac',
            'Pale pink',
            'Periwinkle',
            'Pale yellow',
            'Light blue',
            'Navy',
            'Cream',
            'Peach',
            'Sage green',
            'Red',
            'Purple',
            'White',
            'Orange'
        ],
        filter(val) {
            array = val.split(" ").join("");
            return array.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for your logo (up to 4 characters):',
        validate(value) {
            if (value.length > 0 && value.length < 5) {
                return true;
            }
            return 'Please enter text between 1-4 characters';
        },
    },
    {
        type: 'list',
        name: 'color',
        message: 'What color do you want your text to be?',
        choices: [
            'Lilac',
            'Pale pink',
            'Periwinkle',
            'Pale yellow',
            'Light blue',
            'Navy',
            'Cream',
            'Peach',
            'Sage green',
            'Red',
            'Purple',
            'White',
            'Orange'
        ],
        filter(val) {
            array = val.split(" ").join("");
            return array.toLowerCase();
        }
    },
    {
        type: 'list',
        name: 'font',
        message: 'What font do you want to use?',
        choices: [
            'Script',
            'Handwriting',
            'Serif',
            'Sans serif',
            'Typewriting',
            'Monospace',
        ]
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created your logo!'));
}
function renderShape(answers) {
    return `This is a rendering of a ${answers.bgcolor} ${answers.shape} with ${answers.text} written inside of it in ${answers.color}`;
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const logo = renderShape(answers);
            writeToFile('logo.svg', logo);
        })
};

init();