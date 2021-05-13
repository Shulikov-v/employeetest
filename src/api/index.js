let employee = [
    {
        name: 'employee #1',
        status: 'added'
    },
    {
        name: 'employee #2',
        status: 'active'
    },
    {
        name: 'employee #3',
        status: 'added'
    }
]


export const fetcher = async (url) => employee

export const mutateEmployee = async (changedEmployee) => {
    employee =  employee.map(_employee => {
            if (_employee.name === changedEmployee.name) {
                _employee.status = changedEmployee.status
            }
            return _employee
        })
}