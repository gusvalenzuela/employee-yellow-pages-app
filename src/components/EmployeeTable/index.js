import React, { useState, useMemo, useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

const useSortableData = (
  items,
  config = {
    key: "first_name",
    direction: "ascending",
  }
) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
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

const EmployeeTable = () => {
  const { employees, searchOption } = useContext(EmployeeContext);

  const { data, requestSort, sortConfig } = useSortableData(employees);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("first_name")}
                className={getClassNamesFor("first_name")}
              >
                FIRST
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("last_name")}
                className={getClassNamesFor("last_name")}
              >
                LAST
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("title")}
                className={getClassNamesFor("title")}
              >
                TITLE
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("email")}
                className={getClassNamesFor("email")}
              >
                EMAIL
              </button>
            </th>

            <th>
              <button
                type="button"
                onClick={() => requestSort("city")}
                className={getClassNamesFor("city")}
              >
                LOCATION
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td className={searchOption === "first_name" ? "wow" : ""}>
                {employee.first_name}
              </td>
              <td className={searchOption === "last_name" ? "wow" : ""}>
                {employee.last_name}
              </td>
              <td className={searchOption === "title" ? "wow" : ""}>
                {employee.title}
              </td>
              <td className={searchOption === "email" ? "wow" : ""}>
                {employee.email}
              </td>
              <td
                className={
                  searchOption === "city" || searchOption === "state"
                    ? "wow"
                    : ""
                }
              >
                {employee.city}, {employee.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
