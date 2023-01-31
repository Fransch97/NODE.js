import http from "http" ;
import routing from "./Functions/Functions.js";

const requestListener = (request, response) => {
    const url = request.url;
    
    try {
        routing(url, response)
    } catch {
        routing('404', response)
    }
} 

const server = http.createServer(requestListener);

server.listen(3000);

