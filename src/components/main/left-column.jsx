import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from './../componentsLib/simpleUiComponents';


const LeftColumn = ({ query, setQuery, getTasks }) => {

    const [directions, setDirection] = useState({
        email_direction: 'asc',
        status_direction: 'asc',
    });



    const getOrderedTasksBirection = (orderDirection, id) => {
        const from = id.split('_')[0];
        if (from === 'email') {
            setDirection({ ...directions, email_direction: orderDirection });
            setQuery({
                ...query,
                sort_field: 'email',
                sort_direction: orderDirection,
            });
            getTasks({ ...query, sort_field: 'email', sort_direction: orderDirection, });
        } else {
            setDirection({ ...directions, status_direction: orderDirection });
            setQuery({
                ...query,
                sort_field: 'status',
                sort_direction: orderDirection,
            });
            getTasks({ ...query, sort_field: 'status', sort_direction: orderDirection, });
        }
    };

    return (
        <div className='column left-column'>
            <div className='ordered-btn-container'>
                <span>Order by Email</span>
                <div className='checkbox-container'>
                    <div>
                        <label>ASC</label>
                        <Checkbox
                            id='email_asc'
                            size='2rem'
                            backgroundColor={'#fff'}
                            border='#E6E6E6'
                            className={directions.email_direction === 'asc' ? 'checkbox-custom-checked' : null}
                            onClick={(e) => getOrderedTasksBirection('asc', e.target.id)}
                        />
                    </div>
                    <div>
                        <label>DESC</label>
                        <Checkbox
                            id='email_desc'
                            size='2rem'
                            backgroundColor={'#fff'}
                            border='#E6E6E6'
                            className={directions.email_direction === 'desc' ? 'checkbox-custom-checked' : null}
                            onClick={(e) => getOrderedTasksBirection('desc', e.target.id)}
                        />
                    </div>

                </div>
            </div>
            <div className='ordered-btn-container'>
                <span>Order by Status</span>
                <div className='checkbox-container'>
                    <div>
                        <label>ASC</label>
                        <Checkbox
                            id='status_asc'
                            size='2rem'
                            backgroundColor={'#fff'}
                            border='#E6E6E6'
                            className={directions.status_direction === 'asc' ? 'checkbox-custom-checked' : null}
                            onClick={(e) => getOrderedTasksBirection('asc', e.target.id)}
                        />
                    </div>
                    <div>
                        <label>DESC</label>
                        <Checkbox
                            id='status_desc'
                            size='2rem'
                            backgroundColor={'#fff'}
                            border='#E6E6E6'
                            className={directions.status_direction === 'desc' ? 'checkbox-custom-checked' : null}
                            onClick={(e) => getOrderedTasksBirection('desc', e.target.id)}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}
LeftColumn.propTypes = {
    query: PropTypes.object.isRequired,
    setQuery: PropTypes.func.isRequired,
    getTasks: PropTypes.func.isRequired,
};

export default LeftColumn;