import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import fs from 'fs';
import path from 'path';
import App from '../client/App';
import theme from '../client/Theme';

// import { create } from 'jss';
// import { jssPreset } from '@material-ui/styles';

// const jss = create({
//   plugins: [...jssPreset().plugins],
// });

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/res')));

app.get('/*', (req, res) => {
    const generateClassName = createGenerateClassName({
        productionPrefix: 'tests'
    });
    const sheets = new ServerStyleSheets({
        generateClassName
    });

    // Render the component to a string.
    const html = ReactDOMServer.renderToString(
        sheets.collect(
            <StylesProvider generateClassName={generateClassName}>
                <ThemeProvider theme={theme} >
                    <App />
                </ThemeProvider>
            </StylesProvider>
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