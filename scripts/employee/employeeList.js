import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "../computer/computerDataProvider.js"
import { employee } from "./Employee.js"
import { useDepartments } from "../department/departmentDataProvider.js"
import { useOffices } from "../offices/officeDataProvider.js"
 
const contentTarget = document.querySelector(".employees")

    const render = employeesToRender => {
        //getting the data
        const computers = useComputers()
        const departments = useDepartments()
        const offices = useOffices()

        contentTarget.innerHTML = employeesToRender.map(
            (employeeObject) => {
            //Find the related computer for the current employee
            const foundComputer = computers.find(
            (computer) => {
                return computer.id === employeeObject.computerId //return the computer.Id = the computerId on employee object in array
            }
            )
            const foundDepartment = departments.find(
                (department) => {
                return department.id === employeeObject.departmentId
                }
            )
            const foundOffice = offices.find(
                (office) => {
                return office.id === employeeObject.officeId
                }
            )
            return employee(employeeObject, foundComputer, foundDepartment, foundOffice)  //
            
        }
        ).join("")
    }

 
export const EmployeeList = () => {
    const employees = useEmployees()
    
    render(employees)
}
