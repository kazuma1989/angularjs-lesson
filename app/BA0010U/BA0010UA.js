'use strict';

class BA0010UA {

  constructor(ba0010uModel) {
    this.ba0010uModel = ba0010uModel;

    this.text = 'I`m View1';
    this.newText = '';
    this.active = false;
    this.name = '';
    this.age = null;
  }

  send() {
    // console.log('send called!!!', this.text);
    // console.log('send called!!!', this.name, this.age);

    this.ba0010uModel.send();
  }

  change() {
    this.text = this.newText;
  }

  isValid() {
    // return this.text !== '';
    return this.name !== '' && (this.age !== null && this.age >= 20);
  }

}

angular.module('myApp.view1')

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'BA0010U/BA0010UA.html',
      controller: 'BA0010UA'
    });
  }])

  .controller('BA0010UA', ['IBA0010UModel', BA0010UA]);

  // let ba0010uModel = new BA0010UModel($http);
  // new BA0010UA(ba0010uModel);
