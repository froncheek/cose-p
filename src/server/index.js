import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();
const port = 3000;

app.get('/*', (req, res) => {
    res.send(`${ReactDOMServer.renderToString(<div>Hello Express React</div>)}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))