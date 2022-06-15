# [Svelte](https://svelte.dev/), [WindiCSS](https://windicss.org/), [Storybook](https://storybook.js.org/), [Jest](https://jestjs.io/) & [TypeScript](https://www.typescriptlang.org/)

Based on the template https://github.com/munxar/svendi.

Contains a fully functional starter with Svelte, Svelte-i18n, WindiCSS & Typescript, and some more or less useful widgets. Use `npm run storybook` to display them.


## Prerequisites:

Node 16  (Storybook launch will not work with 17)

## Install
```bash
npx degit rgwch/svendistoje#main my-app
cd my-app
npm i
```

## Develop
```bash
npm run dev
```
(And navigate to <http://localhost:3000>)

## Build for Production and launch
```bash
npm run build
npm start
```
## Generate translations

```bash
npm run i18n
```

Note: Will use src/services/i18n/de.json as base to synchronize the other defined language files 


## Run Jest

```bash
npm test
```

## Run Jest and watch continuously

```bash
npm run test:watch
```
(Re-runs tests after each change)

## Run Storybook

```bash
npm run storybook
```
