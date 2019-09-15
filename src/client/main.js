import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Paper, Tabs, Tab, TabPanel} from '@material-ui/core';

class Main extends React.Component{
    handleChange(event, newValue) {
        setValue(newValue);
    }
    render() {
        return(
            <main>
                <Tabs
                //   value="0"
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="Dashboard"  />
                  <Tab label="Opportunities"/>
                  <Tab label="Offers & Services"/>
                </Tabs>
                {/* <TabPanel index={0}>
                    <Container fixed >
                        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                    </Container>
                </TabPanel>
                <TabPanel  index={1}>
                    Item Two
                </TabPanel>
                <TabPanel  index={2}>
                    Item Three
                </TabPanel> */}
            </main>
        )
    }
}

export default Main;