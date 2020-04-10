import { EmployeeList } from "./employee/employeeList.js";
import { getEmployees } from "./employee/employeeDataProvider.js";
import { getComputers } from "./computer/computerDataProvider.js";
import { getDepartments } from "./department/departmentDataProvider.js";
import { getOffices } from "./offices/officeDataProvider.js";
import { getCustomers } from "./customer/CustomerProvider.js";
import { getEmployeeCustomers } from "./EmployeeCustomer/EmployeeCustomerProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getOffices)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)