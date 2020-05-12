import React, { useState, useMemo } from "react";
import './style.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    console.log(sortableItems)
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { data: sortedItems, requestSort, sortConfig };
};

const EmployeeTable = (props) => {
  const { data, requestSort, sortConfig } = useSortableData(props.employees);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <p>First Name</p>
            <button
              type="button"
              onClick={() => requestSort("first_name")}
              className={getClassNamesFor("first_name")}
            >
              Sort
            </button>
          </th>
          <th>
            <p>Last Name</p>
            <button
              type="button"
              onClick={() => requestSort("last_name")}
              className={getClassNamesFor("last_name")}
            >
              Sort
            </button>
          </th>
          <th>
            <p>Company</p>
            <button
              type="button"
              onClick={() => requestSort("company_name")}
              className={getClassNamesFor("company_name")}
            >
              Sort
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.company_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
