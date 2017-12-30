/// <reference path="../../api/index.d.ts" />

let BA0010UModel = {

    send(text) {
        console.log("send called!!!", text);

        let reqDto = {
            id: 'abc',
            text: text,
            date: new Date()
        };

        let someFunction = (resList: XxxRes[]) => {
            resList.forEach((res) => {
                console.log(res);
            });
            // console.log(resDto);
        };
        let promise = BA0010UApi.login(reqDto);
        promise.then(someFunction);

        BA0010UApi.login(reqDto).then((resList: XxxRes[]) => {
            console.log(resList);
        });

        let resList = await BA0010UApi.login(reqDto);
        console.log(resList);




        function hello(name) {
        }
        let hello = function (name) {
        };
        let hello = (name) => {
        };

        hello("Alice");

        // 1.
        let hello = (name) => { };
        promise.then(hello);
        // 2.
        promise.then((name) => { });

        // 1.
        let name = "Alice";
        hello(name);
        // 2.
        hello("Alice");

        // Java の場合
        // String name = "";
        // TypeScript の場合
        // let name: string = "";
    }

};
