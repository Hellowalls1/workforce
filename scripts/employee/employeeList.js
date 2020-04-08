import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "../computer/computerDataProvider.js"
import { employee } from "./Employee.js"
 
const contentTarget = document.querySelector(".employees")

    const render = employeesToRender => {
        const computers = useComputers()
      

        contentTarget.innerHTML = employeesToRender.map(
            (employeeObject) => {
            //Find the related computer for the current employee
            const foundComputer = computers.find(
            (computer) => {
                return computer.id === employeeObject.computerId //return the computer.Id = the computerId on employee object in array
            }
            )
            return employee(employeeObject, foundComputer)  //
        }
        ).join("")
    }

 
export const EmployeeList = () => {
    const employees = useEmployees()
    
    render(employees)
}
