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

function Directory() {
  const [search, setSearch] = useState("");
  const [searchOption, setSearchOption] = useState("first_name");
  const [employees, setEmployees] = useState(Employees);

  function searchTerms(search) {
    // console.log(`searching for ${search} in employees`);
    var searchField = "first_name";

    console.log(`search option is: ${searchOption}`)

    switch (searchOption) {
      case "last_name":
        searchField = "last_name";
        break;
      case "city":
        searchField = "city";
        break;

      default:
        break;
    }

    setSearchOption(searchOption)

    return new Promise((resolve, reject) => {
      if (!search) {
        resolve(Employees);
      }
      let fEmployees = Employees.filter((i) =>
        i[searchField].toLowerCase().startsWith(search)
      );
      resolve(fEmployees);
    });
  }

  useEffect(() => {
    document.title = "EYP | Directory";
    searchTerms(search).then((res) => {
      if (res.length === 0) {
        // throw new Error("No results found.");
        console.log("No results found.");
      }

      setEmployees(res);
    });
  }, [search]);

  const handleInputChange = (event) => {
    if (!event.target.value) {
      setSearch("");
      // console.log(`change`, event.target.value);
    }
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div>
      <Jumbotron>
        <h1>The Employee Yellow Pages!</h1>
      </Jumbotron>
      <EmployeeContext.Provider
        value={{ employees, search, handleFormSubmit, handleInputChange, searchOption }}
      >
        <div>
          <Container
            fluid="true"
            style={{ marginTop: 30, textAlign: "center" }}
          >
            <Row>
              <Alert
                type="danger"
                // style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
              >
                {/* {error} */}
              </Alert>
              <div className="col-8">
                <SearchForm />
              </div>
              <div className="col-4">
                <button>Filter by...</button>
              </div>
            </Row>
            <Row style={{ padding: "inherit" }}>
              <Col size="12">
                <EmployeeTable />
              </Col>
            </Row>
          </Container>
        </div>
      </EmployeeContext.Provider>
    </div>
  );
}

export default Directory;
