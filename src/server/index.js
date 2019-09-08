import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import App from '../client/index';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, './index.html'),'utf8',function(err,data){
        res.send(data.replace('<div id="root"></div>',`${ReactDOMServer.renderToString(<App/>)}`));
    })
    /*res.send(`${ReactDOMServer.renderToString(<div>Hello Express React</div>)}`)*/
})

// app.use('/res', express.static(path.resolve('dist')));
app.use(express.static(path.join(__dirname, 'res')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))