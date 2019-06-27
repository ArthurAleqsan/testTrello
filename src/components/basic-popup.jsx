import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { message } from "antd";
import 'antd/lib/message/style/index.css';

import { Input, Button } from './componentsLib/simpleUiComponents';


const BasicPopup = ({ close, from, adminEmail, pass }) => {
    const [inputFields, setFields] = useState({
        email: '',
        username: '',
        text: '',
        password: '',
    });
    const EMAIL_VALIDATION_REGEX = '^[^@]+@[^@]+\.[^@]+$';
    const createTask = () => {
        const { email, username, text } = inputFields;
        if (!email && !username, !text) {
            message.error('Please fiel all required fields.');
            return;
        }
        if (!(new RegExp(EMAIL_VALIDATION_REGEX).test(email))) {
            message.error('Email is not valid.');
            return;
        }
    };
    const signUp = () => {
        const { email, password } = inputFields;
        if(email !== adminEmail && password !== pass) {
            message.error('User not Found.');
            return;
        }
    }
    let popupBody;
    switch (from) {
        case 'createTask':
            popupBody = <div className="popup-dialog basicPopup">
                <div className='popup-header'>Please create Task</div>
                <div className='popup-body'>
                    <div className='form-inputs-container'>
                        <label>Username:</label>
                        <Input
                            required
                            type='text'
                            name='username'
                            value={inputFields.username}
                            onChange={(name, value) => setFields({ ...inputFields, [name]: value })}
                            className='form-input'
                            borderColor='#e6e6e6'
                        />
                    </div>
                    <div className='form-inputs-container'>
                        <label>Email:</label>
                        <Input
                            required
                            type='email'
                            validation={EMAIL_VALIDATION_REGEX}
                            name='email'
                            value={inputFields.email}
                            onChange={(name, value) => setFields({ ...inputFields, [name]: value })}
                            className='form-input'
                            borderColor='#e6e6e6'
                        />
                    </div>
                    <div className='form-inputs-container'>
                        <label>Task:</label>
                        <textarea
                            className='form-input textarea'
                            name='text'
                            value={inputFields.text}
                            onChange={(e) => { setFields({ ...inputFields, [e.target.name]: e.target.value }) }}
                        />
                    </div>
                </div>
                <div className='popup-footer'>
                    <Button color='#4286f4' className='btn' onClick={() => createTask()}>Create task</Button>
                </div>
            </div>
            break;
        case 'loginForm':
            popupBody =  popupBody = <div className="popup-dialog basicPopup">
            <div className='popup-header'>Login as Admin</div>
            <div className='popup-body'>
                <div className='form-inputs-container'>
                    <label>Email:</label>
                    <Input
                        required
                        type='email'
                        name='email'
                        validation={EMAIL_VALIDATION_REGEX}
                        value={inputFields.email}
                        onChange={(name, value) => setFields({ ...inputFields, [name]: value })}
                        className='form-input'
                        borderColor='#e6e6e6'
                    />
                </div>
                <div className='form-inputs-container'>
                    <label>Password:</label>
                    <Input
                        required
                        type='password'
                        name='password'
                        value={inputFields.password}
                        onChange={(name, value) => setFields({ ...inputFields, [name]: value })}
                        className='form-input'
                        borderColor='#e6e6e6'
                    />
                </div>
            </div>
            <div className='popup-footer'>
                <Button color='#4286f4' className='btn' onClick={() => signUp()}>Sign Up</Button>
            </div>
        </div>
            break;
    }
    return (
        <div className="popup" id='popup' onMouseDown={(e) => { e.target.id === "popup" && close() }}>
            {popupBody}
        </div>
    )
}
BasicPopup.propTypes = {
    close: PropTypes.func.isRequired,
    from: PropTypes.string.isRequired,
    pass: PropTypes.string,
    adminEmail: PropTypes.string,
};

export default BasicPopup;