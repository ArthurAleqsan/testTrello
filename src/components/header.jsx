import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BasicPopup from './basic-popup';
import { createTask } from './../store/tasks/tasks.actions';
import { login } from '../store/auth/auth.actins';



const Header = ({ adminEmail, pass, isAdmin, createTask, login }) => {
    const [popup, setPopup] = useState(null);

    return (
        <div className='main-header'>
            <div className='header-list-container'>
                <span
                    className='list-item'
                    onClick={() => setPopup(<BasicPopup
                        close={() => setPopup(null)}
                        from='createTask'
                        create_task={(data) => createTask(data)}
                    />)}
                >Create Task</span>

            </div>
            {!isAdmin && <div
                className='list-item admin-item'
                onClick={() => setPopup(<BasicPopup close={() => setPopup(null)} from='loginForm' adminEmail={adminEmail} pass={pass} login = {() => login()} />)}
            >Admin</div>}
            {popup}
        </div>
    )
}
Header.propTypes = {
    isAdmin: PropTypes.bool.isRequired,
    pass: PropTypes.string.isRequired,
    adminEmail: PropTypes.string.isRequired,
    createTask: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
    const { adminEmail, pass, isAdmin, } = state.auth;
    return {
        adminEmail,
        pass,
        isAdmin,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        createTask: (data) => dispatch(createTask(data)),
        login: () => dispatch(login())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);