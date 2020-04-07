const FamilyMember = (employee, computer) => {
    return `
        <section class="employeeData">
             <h2>${employee.firstName} ${employee.lastName}</h2>
            <article>
                ${
                        computers.map(computer => `<div>${computer.model} ${computer.year}</li>`).join("")
                    }
               
            </article>
        </section>
    `
}