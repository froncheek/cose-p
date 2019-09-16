import React from 'react';
import { withStyles } from '@material-ui/styles'
import {Tabs, Tab, Paper, Typography} from '@material-ui/core';
import { Work, Home, Shop } from '@material-ui/icons';
import Dashboard from '../Dashboard';

const useStyles = (theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
        },
    }
}))

class Main extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }
    handleChange(event, newValue) {
        this.setState({
            value: newValue
        })
    }
    render() {
        const classes = this.props.classes;

        return(
        <main>
            <Paper>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    >
                    <Tab label={<Typography variant="caption" className={classes.sectionDesktop}>Home</Typography>}  icon={<Home />} />
                    <Tab label={<Typography variant="caption" className={classes.sectionDesktop}>Opportunities</Typography>} icon={<Work />} />
                    <Tab label={<Typography variant="caption" className={classes.sectionDesktop}>Offers & Services</Typography>} icon={<Shop />}/>
                </Tabs>
            </Paper>
            <Dashboard />
        </main>
        )
    }
}

export default withStyles(useStyles)(Main);