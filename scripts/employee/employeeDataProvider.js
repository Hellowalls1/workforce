let employees = []

export const useEmployees = () => employees.slice()

export const getEmployees = () => {
 return fetch("http://localhost:8088/employees")
    //turns JSON into Javascript
    .then (response => response.json())
    .then (
        (parsedEmployees) => {
            employees = parsedEmployees
        }
    )
}