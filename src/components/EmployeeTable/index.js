import React from "react";
import {useSortableData} from "../../utils"

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
      <caption>Employees</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("firstName")}
            //   className={getClassNamesFor("firstName")}
            >
              First Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("lastName")}
            //   className={getClassNamesFor("lastName")}
            >
              Last Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("salary")}
            //   className={getClassNamesFor("salary")}
            >
              Salary
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.first_name}</td>
            <td>${employee.last_name}</td>
            <td>{employee.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
