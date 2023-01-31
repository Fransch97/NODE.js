import router from'../Router.js';
import fs from 'fs';

const routing = (url, response) =>  {
    const html = fs.readFileSync(router[url], 'utf8');
    response.write(html);
}

export {routing};