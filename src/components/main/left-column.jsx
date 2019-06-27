import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


const LeftColumn = ({ tasks, getTasks }) => {
    // useEffect(()=> {
    //     getTasks({});
    // },[]);
    // console.log(tasks)
    return (
        <div className = 'column left-column'>
            <div className = 'ordered-btn-container'>Order by Email</div>
            <div className = 'ordered-btn-container'>Order by Status</div>
        </div>
    )
}
LeftColumn.propTypes = {
    // tasks: PropTypes.array.isRequired,
    // getTasks: PropTypes.func.isRequired,
};

export default LeftColumn;