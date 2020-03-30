
# 📦 Welcome to the official unofficial next-react-typescript-boilerplate setup
Check out the demo of the setup at [Zeit](https://next-react-typescript-boilerplate.now.sh/)!

## ✅ Features
1. NextJs
2. Custom Express server
3. Styled Components
4. Typescript
5. Linting: prettier, eslint, editorconfig, commitlint and more.
6. SVG file automation: .svg > .tsx
7. Favicons automation: Generate your favicons with 1 command.
8. Http service for api calls
9. Styled system base components like: Box, Card, Grid, Row, Column, etc.
10. Storybook


## 🔧 Todo

1. i18n: Add [react-intl](https://github.com/zeit/next.js/blob/master/examples/with-react-intl/server.js) internationalization. Other [example](https://github.com/weiliang903/react-intl-with-next/blob/master/server.js).
2. Add withAuth HOC
3. Implement [useSWR](https://swr.now.sh/) and add API service with api calls
4. Need more? Send an email [hi@daphnesmit.nl](mailto:hi@daphnesmit.nl)


## 🎉 How to start!

### Initialize the project

- Copy `.env.example` to `.env` and fill in the required variables
- Run `npm install` to install the dependencies

### Development server
To start the development server, run the command:

```
npm run dev
```

This will run the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will see any linting errors in your console/iTerm2/other fancy shell.

### Production build
To start a production build, - local or in your preferred CI - run the command:

```
npm run build / npm run start
```

This build the app for production to the `.next` folder.<br>
It optimizes the build for the best performance. 🎉!

### To deploy and build this project using a CI

- Run `npm run build` to make a production build
- Run `rm -rf node_modules` to remove devDependencies
- Run `npm ci --prod` to build only production dependencies
- IIS server: Create `web.config` file in the root where you fill in a bunch or stuff and run node index.js:

```
<handlers>
    <add name=“iisnode” path=“index.js” verb=“*” modules=“iisnode”/>
</handler
```


## 💡 Next.js

This project uses next.js to achieve server side rendering [https://nextjs.org/docs](https://nextjs.org/docs). Some of the major differences with client side react applications are _routing_ and _server side data fetching_. Also you have to take in to account that you cannot use browser api on the server. To use browser api you need to wrap them in a condition. For example

```javascript
if [process.browser) {
  window.addEventListener(fn)
}
```

## ✨ Generate icons from svg

Place all your icons in `/assets/svg`. Run `npm run svgr`. This generates tsx components from your svg's and optimizes them with SVGO. SVGO config is located in the root of the project. The CamelCased filename will be the name of the icon.

Example:

calendar.svg -> Calendar.tsx

Usage:

`<Icon icon="Calendar" color="primary" />`

## ✨ Generate favicons / app icons

To generate the favicons:

- Overwrite `/public/logo.svg`. Make sure the resolution is as big as possible.
- Define the configuration in `/config/favicons.js`
- Run `npm run favicons`
- The meta tags are automatically inserted in `_document.tsx`


## 🚩 Linting

### Prettier
Nicer code with [prettier](https://prettier.io/)!

### ESLint
Better code with [ESLint](https://eslint.org/) and extensions for React and Typescript

### EditorConfig
Decide how many spaces or [ugh) tabs you want to intend your project with using [EditorConfig](https://editorconfig.org/).

### Commitlint
You might want to remove or customize [Commitlint](https://github.com/conventional-changelog/commitlint).
Commitlint checks if your commit messages meet the conventional commit format. But in case you are using JIRA you might want to have a different commit message structure, example [here](https://github.com/Gherciu/commitlint-jira] or [here](https://www.npmjs.com/package/commitlint-config-jira]


## 🚀 Typescript

This project is written to typescript. If you aren't that familiar with typescript this [cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) is a great resource to get familiar.

## 📝 Documentation

Documentation for this project is present in storybook. Run `npm run storybook` to start up the documentation.

## 💄 Design system

This project uses [styled-components](https://www.styled-components.com/) and [styled-system](https://github.com/styled-system/styled-system) to create the ui library, but using *css*, *css modules* and *sass* are still supported.

## 👷 Atomic design structure

The component archicture is set up following the atomic design methodology.

## 🙌 Credits

Big thanks to:

__Tim de Wolf__</br>
https://github.com/tpdewolf

