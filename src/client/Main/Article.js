import React from 'react';
import { withStyles } from '@material-ui/styles';
import {Container, Typography, Box} from '@material-ui/core';

const useStyles = (theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
        },
    },
    sectionMobile: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
          display: 'flex',
        },
    }
}))

class Article extends React.Component{
    render() {
        const classes = this.props.classes;

        return(
        <Box className={classes.root} >
            {this.props.children}
        </Box>
        )
    }
}

export default withStyles(useStyles)(Article);