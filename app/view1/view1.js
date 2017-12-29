'use strict';

class BA0010UA {

  constructor() {
    this.text = 'I`m View1';
    this.newText = '';
  }

  send() {
    console.log('send called!!!', this.text);
  }

  change() {
    this.text = this.newText;
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