import React from 'react';
import {Paper,Typography, Container, Chip} from '@material-ui/core';

import MainArticle from '../Main/Article';

class Home extends React.Component{
    render() {
        return(
        // <Paper>
        <MainArticle>
            <Paper square={true}>
                <Typography variant="subtitle1" gutterBottom>
                    Feeds
                </Typography>
            </Paper>
        </MainArticle>
        )
    }
}

export default Home;