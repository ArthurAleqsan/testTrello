import React from 'react';
import PropTypes from 'prop-types';
import TaskBox from './../componentsLib/taskBox';


const RightColumn = ({ tasks, getTasks }) => {

    // console.log(tasks)
    return (
        <div className = 'column right-column'>
            <div className = 'task-container'>
                {tasks.map(task => (<TaskBox key = {task.id} task = {task}/>))}
            </div>
            <div className = 'task-pagination'></div>
        </div>
    )
}
RightColumn.propTypes = {
    tasks: PropTypes.array.isRequired,
    // getTasks: PropTypes.func.isRequired,
};

export default RightColumn;