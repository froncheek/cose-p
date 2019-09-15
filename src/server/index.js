import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
// import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import fs from 'fs';
import path from 'path';
import App from '../client/App';
import theme from '../client/Theme';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/res')));

app.get('/*', (req, res) => {
    const sheets = new ServerStyleSheets();

    // Render the component to a string.
    const html = ReactDOMServer.renderToString(
        sheets.collect(
            <ThemeProvider theme={theme} >
                {/* <CssBaseline /> */}
                <App />
            </ThemeProvider>
        )
    );

    // Grab the CSS from the sheets.
    const css = sheets.toString();

    fs.readFile(path.join(__dirname, './index.html'),'utf8', function(err,data){
        res.send(data.replace('${html}', html).replace('${css}', css));
    })
})

// app.use('/res', express.static(path.resolve('dist')));


app.listen(port, () => console.log(`Application listening on port ${port}!`))