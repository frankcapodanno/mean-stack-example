# Basic Admin AngularJS 2 MEAN

This is a basic admin template in AngularJS2 created from the scratch using the official documentation in a way to show how integrate a mean stack application with graphical advanced feauters.
This template has a two "layer" of the application ('back-end' and 'front-end'). The front-end part of this application is under the folder client.
The back end component is on the main folder. I advice to use nodemon. You can install globally nodemon so `npm install -g nodemond`.
To start the backend server and the view engine use the command `nodemon index` in the main folder . To start the client use the command `npm start` in the client folder. 
When you execute `nodemon index` you can access normally from localhost:3000 after when you execute `npm start` a new instance of the frontend application is started at localhost:3001 (this istance is not used).

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

I recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

You need to know how AngularJS 2 working and you have at all a minimum experience with its feauters. 

This template use advanced feauters in Bootstrap that is powerful to have a responsive design. 

### MongoDB database configuration

This version use a MongoDB example that was design with DBSchema. It possible to configure and use a open source service like mlab 
mongojs is used to manage the mongodb standard library. 

## Create a new project based on the Basic Admin AngularJS2

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/frankcapodanno/mean-stack-example  my-proj
cd my-proj
```

I have no intention of updating the source on `frankcapodanno/mean-stack-example`.
Discard the `.git` folder..
```shell
rm -rf .git  # OS/X (bash)
rd .git /S/Q # windows
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

The most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests

TypeScript unit-tests are usually in the `client/app` folder. Their filenames must end in `.spec`.
If you need to use this testing framework on the backend you can move the dependencies. 

Look for the example `client/app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `app` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.