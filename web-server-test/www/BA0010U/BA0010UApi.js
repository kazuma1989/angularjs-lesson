let BA0010UApi = {

    login(reqDto) {
        let promise = WebApi.callApi<XxxRes[]>("/api/BA0010U/login", reqDto);
        return promise;
        // let func = (resList) => {
        //     return resList;
        // };
        // return promise.then(func);
    }

};
