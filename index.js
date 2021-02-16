const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is your project name?',
            name:'readMeName',
        },
        {
            type: 'input',
            message: 'give a brief description:',
            name:'description',
        },
        {
            type: 'input',
            message: 'type in installation instructions',
            name:'installation',
        },
        {
            type: 'input',
            message: 'usage information',
            name:'usage',
        },
        {
            type: 'input',
            message: 'contribution Guidelines',
            name:'contribution',
        },
        {
            type: 'input',
            message: 'test instructions',
            name:'test',
        },
        {
            type: "checkbox",
            message: 'Choose your licensing',
            choices: [ "Personal", "Professional"],
            name: "choice"
        
        },
        {
            type: 'input',
            message: 'Enter Your GitHub Username',
            name:'gitHub',
        },
        {
            type: 'input',
            message: 'Enter Your Email Address',
            name:'email',
        },

    ])


    .then(answers => {
    
        let info = 
        `${answers.readMeName}

        Description: ${answers.description}
        
        Installation: ${answers.installation}
        
        Usage: ${answers.usage}

        License: ${answers.choice}

        Contributing:${answers.contribution}
        
        Testing: ${answers.test}  ${answers.email}

        Questions: feel free to contact me by email:${answers.email}
        or on github: https://github.com/${answers.gitHub}`

        fs.writeFile(`${answers.readMeName}.txt`, info, (err) =>
        err ? console.error(err) : console.log('Success!')
        
      );

    })