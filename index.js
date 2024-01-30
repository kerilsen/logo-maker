import Shapes, { Triangle, Square, Circle, renderShape } from './lib/shapes.js';
const inquirer = require('inquirer');

inquirer
    .prompt({
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: [
            'Triangle ▲',
            'Square ◼️',
            'Circle ⏺',
        ]
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
                'Bright pink',
                'White',
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
                'Bright pink',
                'White',
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
        })
    // promises are chained to directly pass inquirer data into fetch request
    .then((res) => fetch(`https://api.github.com/users/${res.username}`))
    // promises are chained to parse the request for the json data
    .then((res) => res.json())
    // json data is accepted as user and logged to the console
    .then((user) => console.log(user));

const logo = new Circle()