# react-redux-template

A sample React+Redux project template. 

Feel free to use this as a "starter-for-ten" project template. I'm using to play around with several different 
little side projects that involve React+Redux-based clients.

Out-of-the-box supported technologies include:
* EcmaScript 6 
* React
* JSX Compilation
* Redux
* Vendored dependencies

My intention is to have a ready-built harness to build apps with. This harness is wholy focused on a client-side app, 
with no opinions on server-side tech or isometric JavaScript apps.

## Getting Started

Download or clone the project and rename all the relevant project references, such as your details in package.json.

Make sure you have webpack installed via

    npm install webpack -g
    npm install webpack-dev-server -g
    
Install the project dependencies via

    npm install
    
Launch the webpack development server via

    webpack-dev-server --progress --colors --config ./webpack_config.js
    
Access your app at

    http://localhost:8080/webpack-dev-server/
    
# Running webpack from the command line

    webpack --config ./webpack_config.js
    
## Folder Structure

src - All your source codes go into the ./src folder. Create subfolders if you like, such as the provided ./src/reducers folder
and use relative paths to import them. Webpack will provide good error messages if you screw up.

test - All you're tests go in here

dist - Will contain your bundle.js and vendor.bundle.js files if you run webpack from the command line (see above).
    
## Todo

I'd still like to add the following features to the template:

* ESLint
* possibly TypeScript
* Mocha tests

## Feedback & Contributions

I'd love to hear your opinions on this project's setup, e.g. what can be improved? Have you found it useful? Feel free 
to clone and create pull requests. Use Github Issues for all comms.
