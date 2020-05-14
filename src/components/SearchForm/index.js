import React, { useContext } from "react";
import "./style.css";
import EmployeeContext from "../../utils/EmployeeContext";

function SearchForm() {
  const { handleSearchChange, search, handleSelectChange } = useContext(
    EmployeeContext
  );
  return (
    <div className="form-group row">
      <div className="col-md-auto">
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
      </div>
      <div className="col-md-8">
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
    </div>
  );
}

export default SearchForm;
