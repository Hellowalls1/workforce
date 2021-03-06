import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "../computer/computerDataProvider.js"
import { employee } from "./Employee.js"
import { useDepartments } from "../department/departmentDataProvider.js"
import { useOffices } from "../offices/officeDataProvider.js"
import { useEmployeeCustomers } from "../EmployeeCustomer/EmployeeCustomerProvider.js"
import { useCustomers } from "../customer/CustomerProvider.js"
 
//where the things will end up
const contentTarget = document.querySelector(".employees")


//the render function will eventually use all of the emploiyee data. 
//It will map over each employee and use find to obtain information about the employees. 
//It needs all the data before it can do the things
    const render = employeesToRender => {
        //getting a copy of the data and storing it into variables
        const computers = useComputers()
        const departments = useDepartments()
        const offices = useOffices()
        const employeeCustomers = useEmployeeCustomers()
        const customers = useCustomers()

        contentTarget.innerHTML = employeesToRender.map(
            (employeeObject) => {
            //Find the related computer for the current employee
            const foundComputer = computers.find(
            (computer) => {
                return computer.id === employeeObject.computerId //return the computer.Id = the computerId on employee object in array
            }
            )
            //Find the related department for the curent employee
            const foundDepartment = departments.find(
                (department) => {
                return department.id === employeeObject.departmentId
                }
            )
            //Finding the related office for the current employee
            const foundOffice = offices.find(
                (office) => {
                return office.id === employeeObject.officeId
                }
            )

            //get all the customer relationships for the current employee
            const thisEmployeesCustomerRelationships = employeeCustomers.filter( 
                employeeCustomerRelationship => {
                    return employeeObject.id === employeeCustomerRelationship.employeeId
                }
            )

            //for each relationship, convert using map the corresponding customer object 
            const theMatchingCustomers = thisEmployeesCustomerRelationships.map( //itterates over each emp/cust relationship object
                rel => {
                const customer = customers.find(cust => rel.customerId === cust.id) //rel and cust are placeholders until data comes through
               return customer //for map
            }
            )
            
            return employee(employeeObject, foundComputer, foundDepartment, foundOffice, theMatchingCustomers)  //
            
        }
        ).join("")
    }

 //the EmployeeList function brings in a copy employee data and runs it through the render function
export const EmployeeList = () => {
    const employees = useEmployees() //getting the copy of data and defining it in a variable to use in the render function 
    
    render(employees)
}
