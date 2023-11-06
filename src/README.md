# Arkhon

## Project setup
- install Node.js (the version is specified in package.json)
- if you have nvm installed: 
```
nvm use
```
- Install dependencies
```
npm install
```
Some dependencies to install:
- jest
- webpack-dev-server

May need to run as

```
npm install --save-dev ts-jest
```

May also need to nun
```
npm i @types/jest
npm install --save-dev @types/node
```

## Compiles and hot-reloads for development
```
npm start
```

## Run your unit tests
```
npm t
```
## Lints and fixes files
```
npm run lint
```

## Tech stack
- TypeScript 
- Jest / ESLint

# TODO

- Refactor the entire pets system to stop using the 'stats'
  class and use a more direct approach.
- Cut out the petparty and most pet components. Each pet will
  simply be a container class for data managed by the patinstancemanager
  This will more closely follow the pysips architecture
