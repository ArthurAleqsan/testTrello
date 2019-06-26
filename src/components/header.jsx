import React, { useState } from 'react';
import BasicPopup from './basic-popup';


const Header = () => {
    const [popup, setPopup] = useState(null);

    return (
        <div className = 'main-header'>
            <ul className = 'header-list-container'>
                <li 
                className = 'list-item' 
                onClick = {() => setPopup(<BasicPopup close = {() => setPopup(null)} from = 'createTask'/>)}
                >Create Task</li>
                <li className = 'list-item'>Ordered by email</li>
                <li className = 'list-item'>Ordered by status</li>
            </ul>
            <div className = 'list-item admin-item'>Admin</div>
            {popup}
        </div>
    )
}
export default Header;