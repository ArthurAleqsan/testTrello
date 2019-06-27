import Request from './Request';


class MainService extends Request {
    constructor() {
        super('/test-task-backend','');
    }
    getTasks(query) {
        const options = {
            method: 'GET',
        };

        return this.send({ path: `/?developer=Arthur&${Request.makeQuery(query)}`, options }).then((res) => (res))
    }
    createTask(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
        };
        console.log(555);
        return this.send({path: '/create', options}).then(r => console.log(r))
    }
}

export default new MainService();