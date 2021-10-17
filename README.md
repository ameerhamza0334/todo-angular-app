# Todo FrontEnd

This Project Structure is built upon TDD principles having acceptance tests before UI development and then API testing before API implementation.

Project Structure consists of: 
- src/app : It contains the main code base of the project There is currently only one component due to the nature of the project.
- src/models: This project contains all the data models that has been used as Typescript allows us to harness full potential of the Object Oriented Programming so, it's a good habit to handle data I/O through Models.
- src/services: All the communication with the backend API's are being done here. So, by injecting our services inside the components we are communicating with the backend API to Add Todo in to the database
- All the tests regarding front end and services are written in there repective 'spec' file which is created by the angular CLI whenever we create any new component/service.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
