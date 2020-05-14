import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import EmployeeTable from "../components/EmployeeTable";
import SearchForm from "../components/SearchForm";
import Employees from "../employees.json";
import EmployeeContext from "../utils/EmployeeContext.js";
import Alert from "../components/Alert";
// import PageHolder from "../components/PageHolder";

function Directory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [alert, setAlert] = useState(false);
  const [searchOption, setSearchOption] = useState("first_name");
  const [filterOption, setFilterOption] = useState("first_name");
  const [employees, setEmployees] = useState(Employees);

  useEffect(() => {
    document.title = "EYP | Directory";

    function searchTerms(search) {
      return new Promise((resolve) => {
        if (!search) {
          resolve(Employees);
        }
        let fEmployees = Employees.filter((i) =>
          i[searchOption].toLowerCase().includes(search.toLowerCase())
        );

        resolve(fEmployees);
      });
    }

    searchTerms(search).then((res) => {
      setEmployees(res);
      if (res.length === 0) {
        console.log("No results found.");
        setAlert(true);
      } else {
        setAlert(false);
      }
    });
  }, [search, searchOption]);

  useEffect(() => {
    function searchTerms(filter) {
      return new Promise((resolve) => {
        if (!filter) {
          resolve(Employees);
        }
        let fEmployees = Employees.filter((i) =>
          // starts with for when looking by beginning letter
          i[filterOption].toLowerCase().startsWith(filter.toLowerCase())
        );
        resolve(fEmployees);
      });
    }

    searchTerms(filter).then((res) => {
      setSearch("");
      setEmployees(res);
      if (res.length === 0) {
        console.log("No results found.");
        setAlert(true);
      } else {
        setAlert(false);
      }
    });
  }, [filter, filterOption]);

  const handleSelectChange = (event) => {
    if (!event.target.value) {
      setSearchOption("first_name");
    }
    setSearchOption(event.target.value);
    setSearch(search);
  };
  const handleSearchChange = (event) => {
    if (!event.target.value) {
      setSearch("");
    }
    setSearch(event.target.value);
  };
  const handleFilterClick = (event) => {
    if (event.target.value !== undefined) {
      setFilter(event.target.value);
    }
    setFilterOption(searchOption);
    setSearch(search);
  };

  return (
    <div>
      <Jumbotron>
        <h1>The Employee Yellow Pages!</h1>
        <h3>They're good people, Brent.</h3>
      </Jumbotron>
      <EmployeeContext.Provider
        value={{
          employees,
          search,
          filter,
          searchOption,
          handleSearchChange,
          handleSelectChange,
          handleFilterClick,
        }}
      >
        <div>
          <Container
            fluid="true"
            style={{ marginTop: 30, textAlign: "center" }}
          >
            <Row>
              <Col size="12">
                <SearchForm />
              </Col>
            </Row>
            {/* <Row>
              <Col size="12">
                <PageHolder />
              </Col>
            </Row> */}
            <Row style={{ padding: "inherit" }}>
              <Col size="12">
                <EmployeeTable />
              </Col>
              <Alert display={alert} msg={`NO RESULTS FOUND`} search={search} />
            </Row>
          </Container>
        </div>
      </EmployeeContext.Provider>
    </div>
  );
}

export default Directory;
