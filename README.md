# WebdriverIO-Telnyx

Here is my WebdriverIo-Telnyx homework. I tested the [Telnyx](https://telnyx.com/) website, wrote and automated 20 test cases.

## Technology

- [Java Script](https://learn.javascript.ru/)
- [WebdriverIO](https://webdriver.io/)
- [Visual Studio Code](https://code.visualstudio.com/)



## Using NPM

- If you're in the root directory of an existing project, run:

npm init wdio .

- Or if you want to create a new project:

npm init wdio ./path/to/new/project


## Run test

# You should have installeted browsers (firedox/chrome) for local running ui tests

-You can start your test suite by using the run command and pointing to the WebdriverIO config that you just created:

npx wdio run ./wdio.conf.js

-If you like to run specific test files you can add a --spec parameter:

npx wdio run ./wdio.conf.js --spec example.e2e.js

## Allure-report

# Installation
- The easiest way is to include @wdio/allure-reporter as a devDependency in your package.json.

{
  "devDependencies": {
    "@wdio/allure-reporter": "^7.0.0"
  }
}

- You can simply do it by:

npm install @wdio/allure-reporter --save-dev

# Configuration
- Configure the output directory in your wdio.conf.js file:

exports.config = {
    // ...
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    // ...
}

// wdio.conf.js
const allure = require('allure-commandline')

exports.config = {
    // ...
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
    // ...
}


