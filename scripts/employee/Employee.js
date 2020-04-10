//html representation of each employee
export const employee = (employeeObject, computerObject, departmentObject, officeObject, customerArray) => {
    return `
        <div class="employee">
        <header class="employee_name">
        <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
        <h4>${employeeObject.age}<h4>
        </header>
        <section class="employee_computer">Current Computer: ${computerObject.model} ${computerObject.year}</section>
        <section class="employee_department">Current Department: ${departmentObject.name}</section>
        <section class="employee_location">Current Office: ${officeObject.name}</section>
        <section class="employee__customers">
        Has worked for the following customers.
        <ul>
            ${
                customerArray.map(customer => `<li>${customer.name}</li>`).join("") //have to use .map on customerArray because the array is full of objects and must convert to display
            }
        </ul>
    </section>
        </div>
    `
}