import { EmployeeList } from "./employee/employeeList.js";
import { getEmployees } from "./employee/employeeDataProvider.js";
import { getComputers } from "./computer/computerDataProvider.js";


EmployeeList()
    .then(getComputers)
    .then(getEmployees)