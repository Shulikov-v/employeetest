import React, {useState, useCallback} from 'react';
import { Table } from '@mantine/core';
import useSWR from 'swr'

import { EmployeeListItem } from '../EmployeeListItem'

import {fetcher, mutateEmployee} from '../../api/index'

export const EmployeeList = () => {    
    const { data: employeeList, mutate, error } = useSWR('/employees/', fetcher)
    const handleChange = useCallback((changedEmployee) => {
        mutate('/employees/', async () => {
            await mutateEmployee(changedEmployee)
            return employeeList.map(employee => {
                console.log(employee, changedEmployee)
                if (employee.name === changedEmployee.name) {
                    employee.status = changedEmployee.status
                }
                return employee
            })
        })
    }, [employeeList])
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