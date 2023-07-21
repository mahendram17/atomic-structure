import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const AdvanceTable = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
    // Reset the filteredData whenever the data prop changes
    setFilteredData(data);
  }, [data]);

  const onGlobalFilter = (e) => {
    // Custom global filter function
    setGlobalFilter(e.target.value);
    setFilteredData(filterData(e.target.value));
  };

  const filterData = (value) => {
    // Custom filtering function for all columns
    return data.filter((row) => {
      return (
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(value.toLowerCase())
        )
      );
    });
  };

  const onColumnFilter = (e, field) => {
    // Custom filter function for individual columns
    const value = e.target.value;
    setFilteredData((prevData) => {
      return prevData.filter((row) =>
        String(row[field]).toLowerCase().includes(value.toLowerCase())
      );
    });
  };

  return (
    <div>
      <div className="p-mb-3">
        <input
          type="text"
          className="p-inputtext p-component"
          placeholder="Global Search"
          value={globalFilter}
          onChange={onGlobalFilter}
        />
      </div>
      <DataTable
        value={filteredData}
        paginator
        rows={10}
        responsive
        emptyMessage="No records found"
      >
        {Object.keys(data[0]).map((col, index) => (
          <Column
            key={index}
            field={col}
            header={col}
            sortable
            filter
            filterPlaceholder={`Search ${col}`}
            filterValue={filteredData.length ? filteredData[0][col] : ''}
            onFilter={(e) => onColumnFilter(e, col)}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default AdvanceTable;
