import React, { useContext } from "react";
import "./style.css";
import EmployeeContext from "../../utils/EmployeeContext";

function SearchForm() {
  const {
    handleSearchChange,
    search,
    handleSelectChange,
    handleFilterClick,
  } = useContext(EmployeeContext);
  const alphaCharacters = `abcdefghijklmnopqrstuvwxyz`.toUpperCase();
  return (
    <div className="mb-3 px-2">
      {/* search rows  */}
      <div className="form-group row">
        <div className="col-md-auto pr-0">
          <label htmlFor="search-by">Search</label>
          <select
            name="search-options"
            id="search-by"
            onChange={handleSelectChange}
          >
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
            <option value="city">City</option>
            <option value="email">Email</option>
          </select>
          for:
        </div>
        <div className="col-md-8 pr-0">
          <input
            autoComplete="off"
            value={search}
            onChange={handleSearchChange}
            name="term"
            type="text"
            className="form-controol"
            placeholder="Type here to begin search"
            id="term"
          />
        </div>
      </div>

      {/* filter rows  */}

      <div className="row">
        <div className="col" id="alpha-filter-list" onClick={handleFilterClick}>
          Or filter by:
          {alphaCharacters.split(``).map((char) => (
            <button value={char} key={char}>
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
