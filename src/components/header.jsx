import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BasicPopup from './basic-popup';



const Header = ({ adminEmail, pass, isAdmin}) => {
    const [popup, setPopup] = useState(null);
    
    return (
        <div className='main-header'>
            <ul className='header-list-container'>
                <li
                    className='list-item'
                    onClick={() => setPopup(<BasicPopup close={() => setPopup(null)} from='createTask' />)}
                >Create Task</li>
                <li className='list-item'>Ordered by email</li>
                <li className='list-item'>Ordered by status</li>
            </ul>
            {!isAdmin && <div
                className='list-item admin-item'
                onClick={() => setPopup(<BasicPopup close={() => setPopup(null)} from='loginForm' adminEmail={adminEmail} pass={pass} />)}
            >Admin</div>}
            {popup}
        </div>
    )
}
Header.propTypes = {
    isAdmin: PropTypes.bool.isRequired,
    pass: PropTypes.string.isRequired,
    adminEmail: PropTypes.string.isRequired,
};
const mapStateToProps = state => {
    const { adminEmail, pass, isAdmin,} = state.global;
    return {
        adminEmail,
        pass,
        isAdmin,
    }
};
const mapDispatchToProps = dispatch => {
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);