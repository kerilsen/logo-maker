// Import class function from shapes.js
const { renderShape } = require('./lib/shapes.js');

// Require dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// Declare an array of objects that hold the questions
const questions = [
    {
        type: 'list',
        name: 'type',
        message: 'What shape do you want your logo to be?',
        choices: [
            'Triangle',
            'Square',
            'Circle',
        ],
        // convert value to lower case before returning
        filter(val) {
            return val.toLowerCase();
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
        // split string value into array and rejoin without whitespace
        // return value in lower case
        filter(val) {
            let array = val.split(" ").join("");
            return array.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for your logo (up to 3 characters):',
        // ensure that the user enters between 1-3 characters
        validate(value) {
            if (value.length > 0 && value.length < 4) {
                return true;
            }
            return 'Please enter text between 1-3 characters';
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
        // Remove whitespace and convert to lowercase
        filter(val) {
            let array = val.split(" ").join("");
            return array.toLowerCase();
        }
    }
];

// writes the generated content to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created your logo!'));
}

// a function to initiate inquirer to ask questions then write to a file
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(typeof answers);
            const logo = renderShape(answers);
            writeToFile('logo.svg', logo);
        })
};

// initiating
init();