# react-redux-template

A sample React+Redux project template.

Don't you love JavaScript tooling... you spend a day setting up your project, before you've written you're first line
of valuable code. We'll I'm sick of it... hence this Github repo.

Feel free to use this as a "starter-for-ten" project template. I'm using it to play around with several different
little side projects that involve React+Redux-based clients.

Out-of-the-box supported technologies include:
* EcmaScript 6
* React
* JSX Compilation
* Redux
* Vendored dependencies
* ESLint
* Mocha/expect.js tests

My intention is to have a ready-built harness to build apps with. This harness is wholy focused on a client-side app,
with no opinions on server-side tech or isometric JavaScript apps.

> Crafting your own JavaScript toolchain is like crafting your own lightsaber.
> You should probably just use your dad's...
>
> -- <Cite>Benjamin Franklin</Cite>

## Getting Started

Download or clone the project and rename all the relevant project references, such as your details in package.json.

Make sure you have webpack installed via

    npm install webpack -g
    npm install webpack-dev-server -g

Install the project dependencies via

    npm install

Launch the webpack development server via

    npm start

Access your app at [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)

# Running webpack from the command line

    webpack --config ./webpack_config.js

## Folder Structure

*src* - All your source codes go into the ./src folder. Create subfolders if you like, such as the provided ./src/reducers folder
and use relative paths to import them. Webpack will provide good error messages if you screw up.

*test* - All you're tests go in here

*dist* - Will contain your bundle.js and vendor.bundle.js files if you run webpack from the command line (see above).

## Linting with ESLint

This project ships with a vanilla ESLint setup. You can customise ESLint to suit your needs by creating and editing the following file

./.eslintrc

ESLint is included in the Webpack setup of this project, so as Webpack does its thing it'll run your code through ESLint. You
can run ESLint separately:

    npm run lint

This [blog post](http://survivejs.com/webpack_react/linting_in_webpack/) has some great further suggestions on customising ESLint.

## Writing Tests

I've settled on Mocha and expect.js for the test framework. I haven't managed to figure out how to get Webpack to spit out two separate "entry points", i.e. a bundle.js and a test_bundle.js. So as a workaround I'm using a separate webpack_config.js -
test_webpack_config.js - to generate a bundle.js containing the app's tests.

You can run the test server using

     npm test

And access the Mocha Test Runner at [http://localhost:8081/webpack-dev-server/test.html](http://localhost:8081/webpack-dev-server/test.html)

The upside from this config is that you can have two browser tabs open, one with your app and the other with your test runner,
both reloading when you make a code change.

## Todo

I'd still like to add the following features to the template:

* possibly TypeScript
* Redux tooling (time travel etc.)

## Feedback & Contributions

I'd love to hear your opinions on this project's setup, e.g. what can be improved? Have you found it useful? Feel free
to clone and create pull requests. Use Github Issues for all comms.
