import React from 'react';
import {Paper,Typography, Container} from '@material-ui/core';

class Dashboard extends React.Component{
    render() {
        return(
        // <Paper>
        <Container mt="4">
            <Paper>
                <Typography variant="h4" component="h1" gutterBottom>
                    Bulletins
                </Typography>
            </Paper>
        </Container>
        // </Paper>
        )
    }
}

export default Dashboard;