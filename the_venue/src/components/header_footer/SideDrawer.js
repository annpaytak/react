import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';


const SideDrawer = (props) => {

    const ScrollToElement = (element) =>{
      scroller.scrollTo(element, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -150
      });
      props.onClose(false)
    }



    return (
        <Drawer
        anchor="right"
        open={props.open}
        onClose={()=> props.onClose(false)}
        >
          <List component="nav">
          
            <ListItem button onClick={()=> ScrollToElement('featured')}>
              featured
            </ListItem>

            <ListItem button onClick={()=> ScrollToElement('VenueNfo')}>
              Venue NFO
            </ListItem>

            <ListItem button onClick={()=> ScrollToElement('highlights')}>
              Highlights
            </ListItem>

            <ListItem button onClick={()=> ScrollToElement('Pricing')}>
              Pricing
            </ListItem>

            <ListItem button onClick={()=> ScrollToElement('Location')}>
              Location
            </ListItem>

          </List>
          </Drawer>
    );
};

export default SideDrawer;