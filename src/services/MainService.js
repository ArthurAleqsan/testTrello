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
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('text', data.text);
        const options = {
            method: 'POST',
            body: formData,
        };

        return this.send({ path: '/create?developer=Arthur', options, }).then((task) => (task));
    }
    editTask(id, data) {
        let params_string = '';
        Object.keys(data).sort().forEach((k) => {
            params_string = params_string + encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
        });
        params_string = params_string + 'token=' + encodeURIComponent('beejee');

        const formData = new FormData();
        formData.append('status', data.status);
        formData.append('text', data.text);
        formData.append('token', 'beejee');
        formData.append('signature', md5Hash(params_string));

        const options = {
            method: 'POST',
            body: formData,
        };

        return this.send({ path: `/edit/${id}?developer=Arthur`, options, }).then((res) => (res));
    }
}

export default new MainService();