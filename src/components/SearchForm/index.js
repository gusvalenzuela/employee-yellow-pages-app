import React, { useContext } from "react";
import "./style.css";
import EmployeeContext from "../../utils/EmployeeContext";

// Using the datalist element we can create autofill suggestions based on employees?
function SearchForm(props) {
  const { handleSearchChange, search, handleSelectChange } = useContext(EmployeeContext);
  return (
    <form className="search col">
      <div className="form-group col">
        <label htmlFor="search-by">Search By:</label>

        <select
          name="search-options"
          id="search-by"
          onChange={handleSelectChange}
        >
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="city">City</option>
        </select>
        <input
          autoComplete="off"
          value={search}
          onChange={handleSearchChange}
          name="term"
          type="text"
          className="form-controol"
          placeholder="Type in a search term to begin"
          id="term"
        />

      </div>
      {/* <div>
        Or Filter
      </div> */}
    </form>
  );
}

export default SearchForm;
