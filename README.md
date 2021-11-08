# Todo FrontEnd

This Project Structure is built upon TDD principles having acceptance tests before UI development and then API testing before API implementation.

It's a basic todo applicaiton where a user can keep track of his/her todo tasks for the day, the design is minimalistic and only consist of a entry field where user can enter his task and it will be saved in the database and will appear on the list below.

Project Structure consists of: 
- src/app : It contains the main code base of the project There is currently only one component due to the nature of the project.
- src/models: This project contains all the data models that has been used as Typescript allows us to harness full potential of the Object Oriented Programming so, it's a good habit to handle data I/O through Models.
- src/services: All the communication with the backend API's are being done here. So, by injecting our services inside the components we are communicating with the backend API to Add Todo in to the database
- All the unit/integration tests regarding front end and services are written in there repective 'spec' file which is created by the angular CLI whenever we create any new component/service.

## Continous Integration/ Continous Deployment 

Travis CI has been implemented in this project to carry out integration tasks and after successful integration, build is dockerized and is deployed to Heroku server

## Live Project

https://todo-app-ameer.herokuapp.com/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
