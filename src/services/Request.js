export default class ServerConnector {
    constructor(path, api = '/') {
        this.path = api + path;
    }
    
    isOkStatus(status) {
        return [200, 201, 204].includes(status);
    }
    
    static makeQuery(obj){
        let query = '';
        Object.keys(obj).forEach((key) => {
            query += `&${key}=${obj[key]}`;
        });
        return query.substr(1);
    }
    static makeFormData(data) {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        return formData;
    }

    send(req, errHandler) {
        const path = `${this.path}${req.path}`;
        return ServerConnector._makeRequest(req, path, errHandler).then((res) => {
            return res;
        })
    }
    
    static _makeRequest(req, path, errHandler) {
        return ServerConnector.fetcher(req, path, errHandler)
            .then((res) => ServerConnector._handleErrors(res))
            .then((res) => {
                    return res.json().then(json => {
                        return { status: res.status, json };
                    });
                }
            )
    }

    static fetcher(req, path) {
        const headersObj = Object.assign({}, req.headers);

        const headers = new Headers(headersObj);

        const options = Object.assign({
            method: 'POST',
        }, req.options);

        options.headers = headers;
        const request = new Request(path, options);
        return fetch(request)
    }
}