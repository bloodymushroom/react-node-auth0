# React Mobx Webpack Boilerplate

## About

- Boilerplate for React - Mobx - Webpack
- Hot reload, build for dev and production

## Installation

- `npm install` or `yarn install`

## Using the Boilerplate to develop Web Apps (Dependecies included in bundle)

- Develop in the `src` directory
- Use `npm run start` and `npm run build-web` for hot-reloading and packing, respectively

## Using the Boilerplate to develop Node Apps (Dependecies **NOT** included in bundle)

- Develop in the `src` directory
- Use `npm run start` and `npm run build-node` for hot-reloading and packing, respectively

## Using the Boilerplate to develop modules (Regular .js entry point)

- The Workbench will emulate an environment where your module is part of a larger application
- Hot-reloading will still work, speeding up development time
- The workbench directory is excluded from npm via .npmignore

### Setup

1. Switch to the workbench directory
2. `npm install` or `yarn install`
3. Follow the configuration instructions below (the Workbench will run out of the box)

### Configuration

- Modify the entry point in `webpack.config.js` to your `src` entry point
    - Note: The package name is taken from the parent `package.json`
- Import your parent package normally in your workbench
    - See `workbench/src/js/index.js` for an example
- Ensure the parent `package.json` main key is pointing to the bundled .js file in the parent dist folder (after building)

### Usage

- Develop in the `src` directory
- Use `npm run build-module` for packing
- Use `npm wstart` in parent directory to start the dev server, or
- Change into the workbench directory and use `npm start` to start the dev server
    - Note: Don't run `npm run start` from the parent diretory, as your module most likely wont have the correct html files to render on the page
