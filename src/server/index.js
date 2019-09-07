import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import App from '../client/index';

const app = express();
const port = 3000;

app.get('/*', (req, res) => {
    fs.readFile(path.join(__dirname, './index.html'),'utf8',function(err,data){
        //res.writeHead(200, {'Content-Type':'text/html'});
        //res.send(data);
        
        res.send(data.replace('COSE',`${ReactDOMServer.renderToString(<App/>)}`));
        //data.replace()    
        //res.end();
    })
    /*res.send(`${ReactDOMServer.renderToString(<div>Hello Express React</div>)}`)*/
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))