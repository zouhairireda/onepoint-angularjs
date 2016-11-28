# SG - AngularJS advanced training

## Technical requirements

## Technical requirements

### Node.js
https://nodejs.org/en/ 

### Npm global package
```
npm install -g nodemon webpack-dev-server karma-cli protractor phantomjs-prebuilt
```

### Git
https://git-scm.com/ 

### IDE
(Visual Studio Code)

### Chrome
Installation of Chrome browser
Add Chrome bin in the PATH

## Course participant installation instructions TODO

You must meet the technical requirements to follow the following steps
- Open a new shell
- Clone the training repository git clone https://gitlab.groupeonepoint.com/cds-bdx/sg-training-angular-advanced.git
- Move in the working directory `cd sg-training-angular-advanced`

```
npm install
```

```
npm start
```

## Server infos
Development server run on localhost:8080 and proxy the api server running on port 8079
- http://localhost:8080
- http://localhost:8080/webpack-dev-server/
- http://localhost:8080/api proxy to http://localhost:8079/ 

## Launch unit tests
```
npm run test
```

## Launch e2e tests
first launch a dev server
```
npm start
```
then
```
npm run e2e
```