import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from './componentsLib/simpleUiComponents';

const BasicPopup = ({ close, from }) => {
    const [inputFields, setFields] = useState({
        email: '',
        username: '',
        text: '',
        password: '',
    });
    let popupBody;
    switch (from) {
        case 'createTask':
            popupBody = <div>
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
                        validation='(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)'
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
    }
    return (
        <div className="popup" id='popup' onMouseDown={(e) => { e.target.id === "popup" && close() }}>
            <div className="popup-dialog basicPopup">
                <div className='popup-header'>{from === 'createTask' ? 'Please create Task' : 'Login to Admin'}</div>
                <div className='popup-body'>
                    {popupBody}
                </div>
                <div className='popup-footer'>
                    <Button color='#4286f4' className='btn'>{from === 'createTask' ? 'Create task' : 'Login to Admin'}</Button>
                </div>
            </div>
        </div>
    )
}
BasicPopup.propTypes = {
    close: PropTypes.func.isRequired,
    from: PropTypes.string.isRequired,
};
export default BasicPopup;