import { createContext } from "react";

const EmployeeContext = createContext({
  id: "",
  first_name: "",
  last_name: "",
  company_name: "",
  email: "",
  address: "",
  state: "",
  city: "",
  zip: 0,
  search_option:"",
});

export default EmployeeContext;
