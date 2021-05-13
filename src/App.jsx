import * as React from 'react';
import { Paper } from '@mantine/core';


import { EmployeeList } from './components/EmployeeList'

import './App.css';

function App() {
  return (
    <div className="App">
        <Paper shadow="xs" padding="lg" style={{ overflowX: 'auto' }}>
            <EmployeeList />            
        </Paper>
    </div>
  );
}

export default App;
