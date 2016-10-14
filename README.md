# meteor-aurelia

###### YOU CAN CONTINUE TO USE THIS PACKAGE BUT YOU HAVE AN ALTERNATIVE USING [skeleton-esnext-webpack](https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-esnext-webpack) OR [skeleton-typescript-webpack](https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-typescript-webpack) FROM AURELIA WITH [meteor-webpack-client](https://www.npmjs.com/package/meteor-webpack-client).

This module is just to load Aurelia on Meteor 1.3 using NPM.

For the static loading of html, we can't use the [`static-html`](https://atmospherejs.com/meteor/static-html) package as it don't compile `<template>` alone. So we use [`sdenis:static-raw-html`](https://atmospherejs.com/sdenis/static-raw-html) in place. It is a fork of [`tsumina:meteor-aurelia`](https://atmospherejs.com/tsumina/meteor-aurelia).

The Aurelia bootstrapper for Meteor is [`aurelia-bootstrapper-meteor`](https://github.com/stphdenis/aurelia-bootstrapper-meteor) witch is a fork of [`aurelia-bootstrapper-webpack`](https://github.com/aurelia/bootstrapper-webpack).

The Aurelia loader for Meteor is [`aurelia-loader-meteor`](https://github.com/stphdenis/aurelia-loader-meteor) witch is a fork of [`aurelia-loader-webpack`](https://github.com/aurelia/loader-webpack).

If you want to use ES6 in place of ES5 just install [`pbastowski:angular-babel`](https://atmospherejs.com/pbastowski/angular-babel) in place of the new `ecmascript` to be able to use new decorators.

# Aurelia Meteor

[Aurelia](http://aurelia.io) and [Meteor](http://www.meteor.com) power combined. Use Jade and html-minify to speed up your works.

**You must remove `blaze-html-templates` package** because this will handle `*.html` files.
Just use:
```bash
$ meteor remove blaze-html-templates
$ meteor add sdenis:aurelia
```

## Quick start with Aurelia

1. Install [Meteor](http://docs.meteor.com/#quickstart) `$ curl https://install.meteor.com | /bin/sh`
2. Create a new meteor app using `$ meteor create myapp` or navigate to the root of your existing app
3. Install Aurelia:
```bash
$ meteor remove blaze-html-templates
$ meteor add sdenis:aurelia
$ meteor npm install --save aurelia-bootstrapper-meteor
```
4. Install some third party aurelia libraries
```bash
$ meteor npm install --save "some other aurelia libraries"
$ meteor npm install --save "some other third party aurelia libraries"
$ meteor npm dedupe # if necessary due to errors or if you wish to a have smaller download size
```
5. If you need typescript
```bash
$ meteor add barbatus:typescript
```

## Example
- [Example application](https://github.com/tsumina/aurelia-skeleton-jade) : A **meteor-aurelia** port of [skeleton-navigation](http://github.com/aurelia/skeleton-navigation)

- [Aurelia-TODO-App](https://github.com/TsumiNa/Aurelia-TODO-App) is an simple example to show how to play with typescript and aurelia.

- [aurelia-meteor-todos](https://github.com/Markusxmr/aurelia-meteor-todos) is another one port from advanced meteor todos app by [Markusxmr](https://github.com/Markusxmr). Here to see the [live demo](http://aurelia-todos.meteor.com/)

## Tutorial

Aurelia use conventions to keep code simple and clean, to bootstrap an aurelia app you need a `index.html` or `client/index.html`, include:

```html
<body aurelia-app='client/main'>
</body>
```

The `aurelia-app="client/main"` attribute points to the Aurelia configuration file named main, which is `main.js`.

Assume you use es5 js and html template. In the `client` folder create `main.js` and insert:

```javascript
import 'aurelia-bootstrapper-meteor';

export function configure(aurelia) {
  aurelia.use
  .standardConfiguration();

  aurelia.start().then(() => aurelia.setRoot('client/app'));
}
```

The `main.js` is the file where the configuration is done to bootstrap Aurelia.

In this case the main file tells where the entry point of the app is located (`client/app`), which means go look for the `app.html`, `app.js` pair in the `client` folder.

By convention Aurelia uses view/view-model pairs of the same name.

In the `client` folder, create `app.html` and insert:

```html
<template>
  <input type="text" placeholder="Your name" value.bind="name">
  <h2>Hello ${name}!</h2>
</template>
```

Then create `app.js` in the `client` folder and insert:

```javascript
export class App {
  constructor() {
    this.name = '';
  }
}
```

## NOTA BENE 1

When using the `developmentLogging` plugin of Aurelia, you have to add the following package :
```bash
$ meteor npm install --save aurelia-logging-console
```

and modify your `main.js` as follow :

```javascript
import 'aurelia-bootstrapper-meteor';
import 'aurelia-logging-console';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot('client/app'));
}
```

## NOTA BENE 2

When using logging without the `developmentLogging` plugin of Aurelia, you have to add the following packages :
```bash
$ meteor npm install --save aurelia-framework aurelia-logging-console
```

and modify your `main.js` as follow :

```javascript
import 'aurelia-bootstrapper-meteor';

import { LogManager } from 'aurelia-framework';
import { ConsoleAppender } from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration();

  aurelia.start().then(() => aurelia.setRoot('client/app'));
}
```
