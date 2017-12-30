class BA0010UModel {

    constructor($http) {
        this.$http = $http;

        // this.name = '';
    }

    send() {
        console.log('send called!!!');

        return this.$http.get('http://localhost:3000/user/0').then((resp) => {
            console.log(resp);

            // return resp;
            return resp.data;
        });

        // let reqDto = {};
        // reqDto.name = this.name;
        // this.ba0010uApi.send(reqDto).then((respDto) => {
        //     console.log(respDto);
        // });
    }

}

angular.module('myApp.view1', ['ngRoute'])

    .service('IBA0010UModel', ['$http', BA0010UModel])

    // .factory('IBA0010UModel', ['$http', ($http) => new BA0010UModel($http)]);
    // .factory('BA0010UModel', ['BA0010UApi', (ba0010uApi) => new BA0010UModel(ba0010uApi)]);


// if (mode === 'test') {
//     angular.module('myApp.view1', ['ngRoute'])

//         .service('IBA0010UModel', ['$http', BA0010UModelMock]);
// } else if (mode === 'dev') {
//     angular.module('myApp.view1', ['ngRoute'])

//         .service('IBA0010UModel', ['$http', BA0010UModel]);
// } else if (mode === 'prod') {
//     angular.module('myApp.view1', ['ngRoute'])

//         .service('IBA0010UModel', ['$http', BA0010UModelMin]);
// }
