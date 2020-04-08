export const employee = (employeeObject, computerObject) => {
    return `
        <section class="employee">
        <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
        <div>${employeeObject.age}</div>
        <div>Current Computer: ${computerObject.model} ${computerObject.year}</div>
        </section>
    `
}