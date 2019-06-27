import React from 'react';
import PropTypes from 'prop-types';
import {ImageBox} from './ImageBox';


const TaskBox = ({ task }) => {
    const {email, image_path, status, username, text, id } = task;
    return (
        <div className = {`task-box ${ status > 5 ? 'task-box-is-done' : ''}`}>
            <div className = 'task-box-header'>
                <ImageBox image = {image_path} width = '60px' height = '60px'/>
                <div className = 'user-info'>
                    <p>userName: {username}</p>
                    <p>email: {email}</p>
                </div>
            </div>
            <div className = 'task-box-body'>{text}</div>
            <div className = 'task-box-footer'>
                <p>status: {status}</p>
            </div>
        </div>
    )
}
TaskBox.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskBox;