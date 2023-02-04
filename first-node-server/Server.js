import http from "http" ;
import {routing} from "./Functions/Functions.js";
import fs from 'fs';

const requestListener = (request, response) => {
    const url = request.url;
    
    try {
        
        if (url === '/message' && request.method === 'POST') {
            const body = [];
            const name = null;
            
            request.on('data', (chunk) => {
                console.log(chunk)
                body.push(chunk);
            });

            request.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const name = parsedBody.split('=')[1]
                fs.writeFileSync('message.txt', name);
            });

            response.statusCode = 302;
            response.setHeader('Location', '/');
            return response.end();
        }

        routing(url, response)
        response.end()
    } catch {
        routing('404', response)
        response.end()
    }
} 

const server = http.createServer(requestListener);

server.listen(3000);
