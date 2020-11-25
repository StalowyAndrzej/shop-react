# SHOP build in React

* **[React](https://facebook.github.io/react/)** (17.x)
* **[Webpack](https://webpack.js.org/)** (4.x)
* **[Typescript](https://www.typescriptlang.org/)** (3.x)
* **[styled-components](https://styled-components.com/)** (5.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** ([React Hot Loader](https://github.com/gaearon/react-hot-loader))
* Image loading/minification ([Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader))
* Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))
* Test framework ([Jest](https://facebook.github.io/jest/))


## Usage
**Development**

`yarn run start-dev`

* Build app continuously 
* App served @ `http://localhost:8080`


**All commands**

Command | Description
--- | ---
`yarn run start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`yarn run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000`
`yarn run build` | Build app to `/dist/`
`yarn run test` | Run tests
`yarn run lint` | Run linter
`yarn run lint --fix` | Run linter and fix issues
`yarn run start` | (alias of `yarn run start-dev`)

**Note**: replace `yarn` with `npm` in `package.json` if you use npm.

## Starter
* [Application build from the starter](https://github.com/vikpe/react-webpack-typescript-starter)
