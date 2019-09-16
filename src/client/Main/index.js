import React from 'react';
import { withStyles } from '@material-ui/styles'
import {Tabs, Tab, Paper, Typography, Box} from '@material-ui/core';
import { Work, Home, Shop } from '@material-ui/icons';

import HomePage from '../Home';
import Opportunity from '../Opportunities';
import OAS from '../OffersAndServices';

const useStyles = (theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
        },
    }
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }


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
                    onChange={this.handleChange.bind(this)}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    >
                    <Tab label={<Typography variant="caption" className={classes.sectionDesktop}>Home</Typography>}  icon={<Home />} />
                    <Tab label={<Typography variant="caption" className={classes.sectionDesktop}>Opportunities</Typography>} icon={<Work />} />
                    <Tab label={<Typography variant="caption" className={classes.sectionDesktop}>Offers & Services</Typography>} icon={<Shop />}/>
                </Tabs>
            </Paper>
            <TabPanel value={this.state.value} index={0}>
                <HomePage />
            </TabPanel>
            <TabPanel value={this.state.value} index={1}>
                <Opportunity />
            </TabPanel>
            <TabPanel value={this.state.value} index={2}>
                <OAS />
            </TabPanel>
        </main>
        )
    }
}

export default withStyles(useStyles)(Main);