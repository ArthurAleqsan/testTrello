import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageBox } from './ImageBox';
import BasicPopup from '../basic-popup';


const TaskBox = ({ task, isAdmin, editTask }) => {
    const { email, status, username, text, id, } = task;
    const [popup, setPopup] = useState(null);
    return (
        <div className={`task-box ${status > 5 ? 'task-box-is-done' : ''}`}>
            <div className='task-box-header'>
                <ImageBox image={'https://cdn2.stylecraze.com/wp-content/uploads/2014/01/2823.jpg'} width='60px' height='60px' />
                <div className='user-info'>
                    <p>userName: {username}</p>
                    <p>email: {email}</p>
                </div>
                {isAdmin && <div
                    className='edit-icon'
                    onClick= {() => setPopup(<BasicPopup from = 'taskBox' editTask = {editTask} taskId = {id} close = {() => setPopup(null)} editableText = {text} status = {status} />)}
                ></div>}
            </div>
            <div className='task-box-body'>{text}</div>
            <div className='task-box-footer'>
                <p>status: {status}</p>
            </div>
            {popup}
        </div>
    )
}
TaskBox.propTypes = {
    task: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    editTask: PropTypes.func.isRequired,
};

export default TaskBox;