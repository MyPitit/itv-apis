# itv APIs

## What
Using any of the following API’s build a simple application that allows the user to discover ITV content. 

### API:

+ Categories
http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/categories?broadcaster=ITV

+ Channels
http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/channels?broadcaster=ITV

+ Most Popular
http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=popular&size=15&broadcaster=ITV

### Technologies used

#### Webpack and Babel
Frontend code is run through Webpack which transpiles all the js and jsx through babel and bundles it into one neat file app.js which meets ES5 standards.

#### SASS
Webpack also watches for ```.scss``` files and turns them into css that can be used in the bundle

Just ```require``` or ```import``` the ```.scss``` file directly into your React code.

#### React Bootstrap



## Who
This app is developer by @mypitit. 

### Goals
+ Demonstrable understanding of OOP concepts, separations of concerns, design patterns.
+ Appropriate use of frameworks and Bespoke code.
+ Package/Dependency management

### Other 


## How to run  itv APIs App

1. Clone the repo:

```
$ git clone git@github.com:MyPitit/itv-apis.git
```

2. Install the dependencies by cd -ing into the itv-apis folder and run:

```
$ npm install or npm i
```

3. Run ```npm run dev``` if you want to make changes to the FrontEnd

This fires up the webpack dev server with hot reloading. Go to ```localhost:4000```in your browser to see the build. 

4. If you want to see the app running:

```
$ npm run nodemon
```

The ```watch``` command runs webpack in watch mode, this watches for changes in your code and adds the changes to the bundled file app.js in the public folder.

```
$ npm run watch
```

