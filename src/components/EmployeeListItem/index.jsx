import React from 'react';

import { EmployeeStatusInput } from '../EmployeeStatusInput'

export const EmployeeListItem = ({name, status, onChange}) => {
    const handleChange = (newStatus) => {
        onChange({name, status: newStatus})
    }
    return (
        <tr style={{ textAlign: 'left' }}>
            <td>{name}</td>
            <td><EmployeeStatusInput value={status} onChange={handleChange} /></td>
        </tr>
    )
}