import React from 'react';
import {Paper,Typography, Container, Chip} from '@material-ui/core';

import MainArticle from '../Main/Article';

class OAS extends React.Component{
    render() {
        return(
        // <Paper>
        <MainArticle>
            <Typography variant="caption" gutterBottom>
                Offers and Services
            </Typography>
            
        </MainArticle>
        )
    }
}

export default OAS;