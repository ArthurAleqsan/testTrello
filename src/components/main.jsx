import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTasks, setQuery, editTask } from './../store/tasks/tasks.actions';
import LeftColumn from './main/left-column';
import RightColumn from './main/right-column';

const Main = ({ tasks, getTasks, isAdmin, taskTotalCount, query, setQuery, editTask }) => {
    useEffect(() => {
        getTasks({});
    }, []);


    return (
        <div className='main-body'>
            <LeftColumn
                getTasks={(query) => getTasks(query)}
                query={query}
                setQuery={(query) => setQuery(query)}
            />
            <RightColumn
                tasks={tasks}
                isAdmin={isAdmin}
                taskCount={taskTotalCount}
                getTasks={(query) => getTasks(query)}
                query={query}
                setQuery={(query) => setQuery(query)}
                editTask= {(id,task) => editTask(id, task)}
            />
        </div>
    )
}
Main.propTypes = {
    tasks: PropTypes.array.isRequired,
    query: PropTypes.object.isRequired,
    getTasks: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    taskTotalCount: PropTypes.any,
};
const mapStateToProps = state => {
    const { tasks, taskTotalCount, query } = state.tasks;
    const { isAdmin } = state.auth;
    return {
        tasks,
        isAdmin,
        query,
        taskTotalCount
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getTasks: (query) => dispatch(getTasks(query)),
        setQuery: (query) => dispatch(setQuery(query)),
        editTask: (id, task) => dispatch(editTask(id,task)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);