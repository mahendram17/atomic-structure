import React from 'react'
import CommonTable from '../../components/Table/SimpleTable';
import employeeData from '../../data/employeeData'
import AdvanceTable from '../../components/Table/AdvanceTable';
import'./Home.css';
export default function Home() {
    const columns = [
        { field: 'id', header: 'ID' },
        { field: 'name', header: 'Name' },
        { field: 'age', header: 'Age' },
        // Add more columns here
      ];
  return (
    <div>
         <h2>Sample Table</h2>
      {/* <CommonTable data={employeeData} columns={columns} /> */}
      <AdvanceTable data={employeeData} />

    </div>
  )
}
