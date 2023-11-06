# Coding and Skew Polynomials

This repo contains various libraries and documents connected to my work on game development and coding with skew polynomials. To compile the c++ code simply use the command

'g++ -g -O2 -std=c++11 -pthread -march=native main.cpp SkewRing.cpp Skewpoly.cpp Drinfeld.cpp -o test/out -lntl -lgmp -lm'

## Arkhon

### Project setup
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

### Compiles and hot-reloads for development
```
npm start
```

### Run your unit tests
```
npm t
```
### Lints and fixes files
```
npm run lint
```

### Tech stack
- TypeScript 
- Jest / ESLint
