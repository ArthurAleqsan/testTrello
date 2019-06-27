import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTasks } from './../store/tasks/tasks.actions';
import LeftColumn from './main/left-column';
import RightColumn from './main/right-column';

const Main = ({ tasks, getTasks }) => {
    useEffect(()=> {
        getTasks({});
    },[]);
    return (
        <div className = 'main-body'>
            <LeftColumn />
            <RightColumn tasks = {tasks}/>
        </div>
    )
}
Main.propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
    const { tasks } = state.tasks;
    return {
        tasks,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getTasks: (query) => dispatch(getTasks(query)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);