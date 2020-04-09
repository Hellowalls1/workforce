let computers = []

//copy of the data 
export const useComputers = () => computers.slice()

//getting the data from the api
export const getComputers = () => fetch("http://localhost:8088/computers")
    .then(res => res.json())
    .then(data => computers = data)