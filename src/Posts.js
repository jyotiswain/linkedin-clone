import {Avatar} from '@material-ui/core';
import React from 'react';
import './Posts.css';
import InputItems from './InputItems';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import ShareOutlinedIccon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Posts({id, name,description,message, photoUrl}){
    return(
        <div className='posts_container'>
            <div className='posts_header'>
                <Avatar/>
                <div className='posts_info'>
                    <p className='posts_name'>{name}</p>
                    <p className='posts_des'>{description}</p>
                </div>
            </div>
            <div className='posts_body'>
                <p>{message}</p>
                </div>
                <div className='posts_options'>
                  <InputItems Icon={ThumbUpOutlinedIcon} title = "Like"/>
                  <InputItems Icon={MessageOutlinedIcon} title = "Comment"/>
                  <InputItems Icon={ShareOutlinedIccon} title = "Share"/>
                  <InputItems Icon={SendOutlinedIcon} title = "Send"/>
                </div>
            </div>
    );
} 
export default Posts; 