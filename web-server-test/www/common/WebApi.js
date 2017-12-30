let WebApi = {

    callApi<T>(url, reqDto) {
        return $http.post(url, reqDto);
    },

    upload(url, reqDto, file) {
    }

};
