import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Main extends React.Component{
    render() {
        return(
            <Container fixed >
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
        )
    }
}

export default Main;