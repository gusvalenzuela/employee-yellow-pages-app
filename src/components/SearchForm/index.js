import React, { useContext } from "react";
import "./style.css";
import EmployeeContext from "../../utils/EmployeeContext"

// Using the datalist element we can create autofill suggestions based on employees?
function SearchForm(props) {
  const {handleInputChange, search} = useContext(EmployeeContext)
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="term">Search Employee by Name:</label>
        <input
          value={search}
          onChange={handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchForm;
