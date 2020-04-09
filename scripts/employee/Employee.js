//html representation of each employee
export const employee = (employeeObject, computerObject, departmentObject, officeObject) => {
    return `
        <div class="employee">
        <header class="employee_name">
        <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
        <h4>${employeeObject.age}<h4>
        </header>
        <section class="employee_computer">Current Computer: ${computerObject.model} ${computerObject.year}</section>
        <section class="employee_department">Current Department: ${departmentObject.name}</section>
        <section class="employee_location">Current Office: ${officeObject.name}</section>
        </div>
    `
}