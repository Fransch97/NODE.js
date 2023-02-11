import path from 'path';
import fs from 'fs';

class Nav {
    constructor() {}

    getData(cb) {
        fs.readFile(path.resolve('Data/Nav.json'), function(err, data) {
            cb(JSON.parse(data));
        });
    }
}

export default Nav;