# CMS Editor

A React frontend for editing Strapi content

## Table of Contents

- [Prerequisites](#Prerequisites)
- [Installation](#Installation)
- [Usage](#Usage)
- [Environment variables](#Environment-variables)
- [Tooling](#Tooling)
- [Webpack](#Webpack)
- [Helpful scripts](#Helpful-scripts)

***********************************************

## Prerequisites

Ensure the following before you start

1. [Node.js](https://nodejs.org/) installed locally and at a recent stable version.

2. A running local instance of the supporting strapi service, listening for requests on a TCP port. You will need to provide this service's root url as an environment variable.

***********************************************

## Installation

  Clone the repository

  ```plaintext
  git clone https://github.com/Quanda/cms-editor.git
  ```

  Change to the app directory

  ```plaintext
  cd cms-editor
  ```

  Install dependencies

  ```plaintext
  npm install
  ```

***********************************************

## Usage

### Running the app in Development

#### The local development app is served using [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server)

  Start the development server

  ```plaintext
  npm run start:dev
  ```

  Open the app in your browser

  ```plaintext
  http://localhost:8080/
  ```

***********************************************

### Running the app in Production

#### The production app is served from an Express server, see `./express.js`

  Build the app

  Create a build

  ```plaintext
  npm run build
  ```

  Copy express server to the build directory

  ```plaintext
  npm run copy
  ```

  OR, run both scripts with one command

  ```plaintext
  npm run build:copy
  ```

  Lastly, start the express server

  ```plaintext
  npm run start
  ```

***********************************************

## Environment variables

Environment variables are exposed to `process.env` through [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack). These values must be correct for the application to run succesfully.

***********************************************

## Tooling

A list of the primary tools used in this project.

- [`React.js`](https://reactjs.org/)
- [`Apollo GraphQL`](https://www.apollographql.com/)
- [`react-bootstrap`](https://react-bootstrap.github.io/)
- [`styled-components`](https://www.styled-components.com/docs)
- [`webpack`](https://webpack.js.org/configuration/)
- [`eslint`](https://eslint.org/docs/user-guide/getting-started)
- [`babeljs`](https://babeljs.io/docs/en/)

### See `package.json` for full a list of dependencies and devDependencies.

***********************************************

## Webpack

This application gets built with [Webpack](https://webpack.js.org/configuration/) and has several of the options set. See `webpack.config.js` for configuration specifics, and `package.json` for the build scripts which kick off the webpack process.

***********************************************

## Helpful scripts

### Webpack analysis

Run a production build and output a `stats.json`.

```js
npm run build:prod:stats
```

Report on any modules which should be de-duplicated but are not, leading to potentially inflated bundle sizes.

```js
npm run inspectpack:duplicates
```

Report on multiple versions of packages installed in the `node_modules` tree which have version skews and also have 2+ files included in the bundle under inspection.

```js
npm run inspectpack:versions
```