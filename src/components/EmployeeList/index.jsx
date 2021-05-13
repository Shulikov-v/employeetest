import React from 'react';
import { Table } from '@mantine/core';
import useSWR from 'swr'

import { EmployeeListItem } from '../EmployeeListItem'

import {fetcher, mutateEmployee} from '../../api/index'

export const EmployeeList = () => {    
    const { data: employeeList, mutate, error } = useSWR('/employees/', fetcher)
    const handleChange = async (changedEmployee) => {
        await mutateEmployee(changedEmployee)
        mutate('/employees/', true)
    }
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Employee Status</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(employeeList) && employeeList.map(({name, status}) => (
                    <EmployeeListItem name={name} status={status} onChange={handleChange} />
                ))}
            </tbody>
        </Table>
    )
}