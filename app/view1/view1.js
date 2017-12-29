'use strict';

class BA0010UA {

  constructor() {
    this.text = 'I`m View1';
    this.newText = '';
    this.active = false;
    this.name = '';
    this.age = null;
  }

  send() {
    // console.log('send called!!!', this.text);
    console.log('send called!!!', this.name, this.age);
  }

  change() {
    this.text = this.newText;
  }

  isValid() {
    // return this.text !== '';
    return this.name !== '' && (this.age !== null && this.age >= 20);
  }

}

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'BA0010UA'
    });
  }])

  .controller('BA0010UA', [BA0010UA]);