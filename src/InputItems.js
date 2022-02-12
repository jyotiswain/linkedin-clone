import React from 'react';
import './InputItems.css';
//import {Avatar} from '@material-ui/core';

function InputItems({Icon,title, color}){
    return(
    <div className='inputItems_container'>
        {Icon && <Icon style ={{color: color}}/>}
        <p>{title}</p>
    </div>
    );
}

export default InputItems;