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
                <Tab className="navbar-tab" label="Poooood" href="#pod" />
                <Tab className="navbar-tab" label="Team" href="#team" />
                <Tab className="navbar-tab" label="Sponsors" href="#sponsors" />
                <Tab className="navbar-tab" label="Support Us" href="#supportUs" />
                <Tab className="navbar-tab" label="Gallery" href="#gallery" />
            </Tabs>
        );
        var iconTabs = (
            <IconMenu iconButtonElement={<IconButton><MoreHorizIcon color="white" /> </IconButton>}>
                <MenuItem primaryText="Pod" href="#pod" />
                <MenuItem primaryText="Team" href="#team" />
                <MenuItem primaryText="Sponsors" href="#sponsors" />
                <MenuItem primaryText="Support Us" href="#supportUs" />
                <MenuItem primaryText="Gallery" href="#gallery" />

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
