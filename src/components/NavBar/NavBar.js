import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';

import { AppBar, Tabs, Tab, Toolbar, ToolbarGroup, IconMenu, IconButton, MenuItem} from 'material-ui';
import MediaQuery from 'react-responsive';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';


class NavBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        var myTabs = (
            <Tabs tabItemContainerStyle={{ width: "100%", backgroundColor: "inherit" }} inkBarStyle={{ backgroundColor: "inherit" }}>
                <Tab className="navbar-tab" label="Who Are We" href="#us" />
                <Tab className="navbar-tab" label="Cleints" href="#clients" />
                <Tab className="navbar-tab" label="Contact Us" href="#contact" />
            </Tabs>
        );
        var iconTabs = (
            <IconMenu iconButtonElement={<IconButton><MoreHorizIcon color="white" /> </IconButton>}>
                <MenuItem primaryText="Who Are We" href="#us" />
                <MenuItem primaryText="Clients" href="#clients" />
                <MenuItem primaryText="Contact Us" href="#contact" />

            </IconMenu>
        );

        return (
            <AppBar showMenuIconButton={false}
                title={<a href="#top"><img src="assets/logo.png" height = "60px"/> </a>}
                iconElementRight={
                    <div>
                        <MediaQuery query="(min-width: 610px)">
                            <ToolbarGroup style={{ width: "100%", backgroundColor: "inherit" }}>{myTabs}</ToolbarGroup>
                        </MediaQuery>
                        <MediaQuery query="(max-width: 610px)">
                            {iconTabs}
                        </MediaQuery>
                    </div>
                }
                
                style={{ position: "fixed", backgroundColor: "rgb(35,31,32)" }}>
                
                
            </AppBar>
        );
    }


}


export default NavBar;
