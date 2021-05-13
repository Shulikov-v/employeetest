import React from 'react';
import ClassNames from 'classnames';

import './styles.css'

export const EmployeeStatusInput = ({value, onChange}) => {

    const handleClick = (e) => {
        onChange(e.target.value)
    }

    return (
        <div>
            <button 
                type="button"
                className={ClassNames('btn', 'btn-arrow-right', {'btn-active': value === 'added'})}
                value="added"
                onClick={handleClick}
            >Added</button>
            <button
                type="button"
                className={ClassNames('btn', 'btn-arrow-right', {'btn-active': value === 'in-check'})}
                value="in-check"
                onClick={handleClick}
            >In-Check</button>
            <button
                type="button"
                className={ClassNames('btn', 'btn-arrow-right', {'btn-active': value === 'approved'})}
                value="approved"
                onClick={handleClick}
            >Approved</button>
            <button
                type="button"
                className={ClassNames('btn', 'btn-arrow-right', {'btn-active': value === 'active'})}
                value="active"
                onClick={handleClick}
            >Active</button>
            <button
                type="button"
                className={ClassNames('btn', 'btn-arrow-right', {'btn-active': value === 'inactive'})}
                value="inactive"
                onClick={handleClick}
            >Inactive</button>
        </div>
    )
}