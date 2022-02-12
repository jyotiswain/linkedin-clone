import React from "react";
import './Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import NavContents from "./NavContents";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function Nav() {
    const dispatch = useDispatch()
    const logOutofApp = () => {
        auth.signOut();
        dispatch(logout())
    }

    return (
        <div className="nav_container">
            <div className="nav_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

                <div className="search_box">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>

            </div>
            <div className="nav_right">

                <NavContents Icon={HomeIcon} title="Home" />
                <NavContents Icon={SupervisorAccountIcon} title="My Network" />
                <NavContents Icon={BusinessCenterIcon} title="Jobs" />
                <NavContents Icon={ChatIcon} title="Messaging" />
                <NavContents Icon={NotificationsIcon} title="Notification " />
                <NavContents avatar onClick = {logOutofApp} title="me"/>

            </div>
        </div>
    )
}

export default Nav;