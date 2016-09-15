# aurelia-app-cli

## what is the aurelia-app-cli plugin

Currently, the aurelia framework development environment is augmented with a Command Line Interface (a CLI). Mutatis Matandis, applications build with Aurelia can also benefit from a CLI. In general, a CLI allows a user to enter commands for performing various tasks in an application. Since a picture is worth a thousand words let's first look what an application CLI could look like:

<img src="./pics/cli.png"  width="350">

A running application is worth a billion words:

https://paulvanbladel.github.io/aurelia-app-cli-sample

## In which scenarios can a(n) (aurelia) SPA benefit from a command line interface

* prototype a feature that eventually will have a user interface.
* allow the execution of certain tasks to be executed in a more efficient way: certain tasks can sometimes be executed more efficiently in a CLI like manner.
* a 'backdoor' for fasciliating certain integration test scenarios.
* the return value of a command executed in aurelia-app-cli is not limited to text (you are right, very much indeed, here it's richer than aurelia-cli :) ), aurelia-app-cli allows also html or graphics.

## features

* command history: key up and key down browses the command history
* commands can return text, html (and thus also images)
* command can be executed in parallel
* commands are wrapped inside a promise, command execution status (success or fail) results in different coloring of the command result
* a help command provides help on both the built-in commands (i.e. the command provided by default by aureli-app-cli) and the application specific commands (i.e. commands provided by the application consuming the aurelia-app-cli plugin).

## future features
* hotkey for activating and hiding the command window
* improved 'scroll management'
* persist command history to browser storage (currently the history is reset when the CLS command is executed)
* more powerfull command parameter parsing

## a bit more on the internals of aurelia-app-cli
* //TODO

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

