class BA0010UModel {

    send() {
        console.log('send called!!!');
    }

}

angular.module('myApp.view1', ['ngRoute'])

    .service('BA0010UModel', [BA0010UModel]);