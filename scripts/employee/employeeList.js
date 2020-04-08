import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "../computer/computerDataProvider.js"
import { employee } from "./Employee.js"
import { useDepartments } from "../department/departmentDataProvider.js"
 
const contentTarget = document.querySelector(".employees")

    const render = employeesToRender => {
        const computers = useComputers()
        const departments = useDepartments()

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
            return employee(employeeObject, foundComputer, foundDepartment)  //
        }
        ).join("")
    }

 
export const EmployeeList = () => {
    const employees = useEmployees()
    
    render(employees)
}
