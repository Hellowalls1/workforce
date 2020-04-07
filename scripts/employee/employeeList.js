import { useEmployees } from "./employeeDataProvider"
import { useComputers } from "../computer/computerDataProvider"

const contentTarget = document.querySelector(".family")

export const FamilyList = () => {
    const employees = useEmployees()
    const computers = useComputers()
  

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find related chore ids
            let relatedChores = peopleChores.filter(pc => pc.familyMemberId === person.id)

            // Convert the array from relationship objects to chore objects
            relatedChores = relatedChores.map(rc => {
                return chores.find(chore => chore.id === rc.choreId)
            })

            // Get HTML representation of product
            const html = FamilyMember(person, relatedChores)

            return html
        }).join("")
    }

    render()
}

export default FamilyList
