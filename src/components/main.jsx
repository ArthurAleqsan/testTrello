import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTasks } from './../store/global/global.actins';

const Main = ({ tasks, getTasks }) => {
    useEffect(()=> {
        getTasks({page : 5});
    },[]);
    console.log(tasks)
    return (
        <div>

        </div>
    )
}
Main.propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
    const { tasks } = state.global;
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