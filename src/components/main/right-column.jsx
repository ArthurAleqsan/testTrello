import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TaskBox from './../componentsLib/taskBox';


const RightColumn = ({ tasks, getTasks, isAdmin, taskCount, query, setQuery, editTask }) => {
    const [activePage, setActivePage] = useState(query.page);
    const pageCount = taskCount % 3 === 0 ? taskCount / 3 : Math.floor(taskCount / 3) + 1;
    const pages = [];
    for (let i = 1; i < pageCount + 1; i++) {
        pages.push(i);
    }
    const getTasksFromPage = (page) => {
        setActivePage(page);
        setQuery({ ...query, page });
        getTasks({ ...query, page });
    }

    return (
        <div className='column right-column'>
            <div className='task-container'>
                {tasks.map((task, index) => {
                    if ((index + 1) > 3) return;
                    return (<TaskBox key={task.id} editTask={editTask} task={task} isAdmin={isAdmin}  />)
                })}
            </div>
            <ul className='task-pagination'>
                {pages.map((i) => {
                    return (<li
                        className={`list-item ${activePage == i ? 'active-item' : ''}`}
                        key={i}
                        onClick={() => getTasksFromPage(i)}
                    >{i}</li>)
                })}
            </ul>
        </div>
    )
}
RightColumn.propTypes = {
    tasks: PropTypes.array.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    taskCount: PropTypes.any,
    getTasks: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
};

export default RightColumn;