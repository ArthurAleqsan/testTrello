import Request from './Request';
import { encode } from 'encode-3986'


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
        const aaa = encode(formData);
        console.log(aaa)
        const options = {
            method: 'POST',
            body: formData,
        };

        return this.send({ path: '/create?developer=Arthur', options, }).then((task) => (task));
    }
    editTask(id, data) {
        const formData = new FormData();
        formData.append('status', data.status);
        formData.append('text', data.text);
        formData.append('token ', 'beejee');
        console.log(formData);
        const options = {
            method: 'POST',
            body: formData,
        };

        return this.send({ path: `/edit/${id}?developer=Arthur`, options, }).then((r) => console.log(r));
    }
}

export default new MainService();