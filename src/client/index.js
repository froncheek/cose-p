import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import App from './App';
import theme from './Theme';

function Main() {
    React.useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }, []);
  
    return (
        // <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}
            <App />
        </ThemeProvider>
        //
    );
}
//ReactDOM.hydrate(<Main />, document.getElementById('root'));
//ReactDOM.render(<Main />, document.getElementById('root'));
