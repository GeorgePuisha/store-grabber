
<p align="center">
    <a href="https://codeclimate.com/github/GeorgePuisha/store-grabber/maintainability"><img src="https://api.codeclimate.com/v1/badges/5c5e3af606dde6d42af8/maintainability" /></a>
    <a class="badge-align" href="https://www.codacy.com/app/GeorgePuisha/store-grabber?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=GeorgePuisha/store-grabber&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/db94870597bf4c929e7167f8d779d8c0"/></a>
    <a href="https://circleci.com/gh/GeorgePuisha/store-grabber"><img src="https://circleci.com/gh/GeorgePuisha/store-grabber/tree/master.svg?style=shield" /></a>
</p>

# Store Grabber

Client part of client-server solution to track [Onliner.by](https://catalog.onliner.by/) prices and to notify user about price changes.

## Getting Started

Clone project to your computer.

```
$ git clone https://github.com/GeorgePuisha/store-grabber.git
```
### Prerequisites

To start with Store Grabber, you should have [Node](https://nodejs.org/en/download/package-manager/) installed. Project guaranteed to work with Node `^8.4.0`. It already has [npm](https://github.com/npm/npm), so your version must be up-to-date.

Install [angular-cli](https://github.com/angular/angular-cli) globally:

```
$ npm install -g @angular/cli
```

### Installing

Install all dependencies of both client & server.

```
$ npm install
```

To run client on localhost type `npm run dev` in root folder.

```
$ npm run dev
```

Client is up on `4200`.

### Running the tests

Tests are provided by [Karma](https://karma-runner.github.io/1.0/index.html).

Run tests with browser open:

```
$ ng test
```

Without browser...

```
$ npm tests
```

...which equals to `ng test --watch=false`

### Deployment

To deploy with Heroku, visit [official guide page](https://devcenter.heroku.com/articles/git).

Briefly:

```
$ heroku login
Enter your Heroku credentials.
$ heroku create
$ git push heroku master
```

Ensure the app is running.

```
heroku ps:scale web=1
heroku open
```

Some hints:

* Make sure node & npm version are specified in `package.json`;
* Make sure `package.json` has `heroku-postbuild` script;
* Your project should provide a Procfile. [more](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile);
* Easy start with Heroku ["Provision a database"](https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database) article.

## Built With

* [npm](https://github.com/npm/npm) - Package manager for JavaScript;
* [Node.js](https://github.com/nodejs/node) - JavaScript runtime for server;
* [Express.js](https://github.com/expressjs/express) - Framework for Node.js;
* [Moment.js](https://github.com/moment/moment/) - JavaScript library for date manipulations;
* [Angular 5](https://github.com/angular/angular) - Development platform for client application;
* [ngx-infinite-scroll](https://github.com/orizens/ngx-infinite-scroll) - Infinite scrolling for Angular 5;
* [ngx-charts](https://github.com/swimlane/ngx-charts) - Charting framework for Angular 5;
* [Bootstrap 4](https://v4-alpha.getbootstrap.com/) - Responsive web-design framework;
* [Heroku](https://www.heroku.com/home) - Deployment platform.

## Author

* **George Puisha** - [GeorgePuisha](https://github.com/GeorgePuisha)
