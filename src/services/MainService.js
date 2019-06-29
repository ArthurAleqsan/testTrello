import Request from './Request';
import { md5Hash } from '../util/helpers';


class MainService extends Request {
    constructor() {
        super('/test-task-backend', '');
    }
    getTasks(query) {
        Object.keys(query).forEach(k => {
            if (query[k] === '') delete query[k];
        });
        const options = {
            method: 'GET',
        };

        return this.send({ path: `/?developer=Arthur&${Request.makeQuery(query)}`, options }).then((tasks) => (tasks));
    }
    createTask(data) {

        const options = {
            method: 'POST',
            body: Request.makeFormData(data),
        };

        return this.send({ path: '/create?developer=Arthur', options, }).then((task) => (task));
    }
    editTask(id, data) {
        let params_string = '';
        Object.keys(data).sort().forEach((k) => {
            params_string = params_string + encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
        });
        params_string = params_string + 'token=' + encodeURIComponent('beejee');

        const options = {
            method: 'POST',
            body: Request.makeFormData({...data, 'token': 'beejee', 'signature': md5Hash(params_string)}),
        };

        return this.send({ path: `/edit/${id}?developer=Arthur`, options, }).then((res) => (res));
    }
}

export default new MainService();