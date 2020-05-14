import React, { useContext } from "react";
import "./style.css";
import EmployeeContext from "../../utils/EmployeeContext";

// Using the datalist element we can create autofill suggestions based on employees?
function SearchForm(props) {
  const { handleInputChange, search, search_option } = useContext(EmployeeContext);
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search-select">Search By:</label>

        <select name="search-options" id="search-select">
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="city">City</option>
          {/* <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option> */}
        </select>
        <input
          autoComplete="off"
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
