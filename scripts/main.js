import { EmployeeList } from "./employee/employeeList.js";
import { getEmployees } from "./employee/employeeDataProvider.js";
import { getComputers } from "./computer/computerDataProvider.js";
import { getDepartments } from "./department/departmentDataProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(EmployeeList)