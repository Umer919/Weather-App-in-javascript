import http, { request } from 'http';
import { fstat } from 'fs';
const hostname = '127.0.0.1';
const port = 3000;
fs.readFile('index.html', (err, html) =>{
    if(err){
        throw err;
    }
}
const server = http.createServer((Request,Response));  {

res.statusCode=200;
res.setHeader('content=type', 'text/plain');
res.write(html);
res.end();
}};

server.listen(port, hostname, () =>{
    console.log('server started on port ' +port);

};
