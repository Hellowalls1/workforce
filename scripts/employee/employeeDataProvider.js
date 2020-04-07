let employees = []

export const useEmployees = () => employees.slice()

export const getFamilyMembers = () => fetch("http://localhost:8088/familymembers")
    .then(res => res.json())
    .then(data => employees = data)