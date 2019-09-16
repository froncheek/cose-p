import React from 'react';
import {Paper,Typography, Container, Chip} from '@material-ui/core';

import MainArticle from '../Main/Article';

class Opportunity extends React.Component{
    render() {
        return(
        // <Paper>
        <MainArticle>
            <Typography variant="caption" gutterBottom>
                Lists:
            </Typography>
            <Chip label="All" />
            <Chip label="Goods" />
            <Chip label="Bidding" />
            <Chip label="Services" />
            <Paper square={true}>
                <Typography variant="subtitle1" gutterBottom>
                    Opportunities
                </Typography>
            </Paper>
        </MainArticle>
        )
    }
}

export default Opportunity;