import Request from './Request';


class MainService extends Request {
    constructor() {
        super('/test-task-backend','');
    }
    getTasks(query) {
        const options = {
            method: 'GET',
        };
        console.log(query);

        return this.send({ path: `/?developer=Name&${Request.makeQuery(query)}`, options }).then((res) => (res))
    }
}

export default new MainService();