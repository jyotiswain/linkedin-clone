import { Avatar } from '@material-ui/core'
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) =>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src='https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg' alt='' />
                <Avatar className='sidebar_avatar' />
                <h2>Jyoti Swain</h2>
                <h4>jyoti@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">6257</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on your post</p>
                    <p className="sidebar_statNumber">2357</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("software")}
                {recentItem("developer")}
                {recentItem("design")}

            </div>

        </div>
    )
}
export default Sidebar;