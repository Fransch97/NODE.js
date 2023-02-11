import path from 'path';
import fs from 'fs';

class Home {

    constructor() {}

    getData(cb) {
        fs.readFile(path.resolve('Data/Home.json'), function(err, data) {
            cb(JSON.parse(data));
        });
    }
}

export default Home;