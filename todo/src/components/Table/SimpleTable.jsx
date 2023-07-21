import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        
export default function SimpleTable({ data, columns }) {
  return (
    <div>
       <DataTable value={data} className="p-datatable-striped">
      {columns.map((column) => (
        <Column key={column.field} field={column.field} header={column.header} />
      ))}
    </DataTable>
    </div>
  )
}
