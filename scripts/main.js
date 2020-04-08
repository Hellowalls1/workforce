import { EmployeeList } from "./employee/employeeList.js";
import { getEmployees } from "./employee/employeeDataProvider.js";
import { getComputers } from "./computer/computerDataProvider.js";

getEmployees()
    .then(getComputers)
    .then(EmployeeList)