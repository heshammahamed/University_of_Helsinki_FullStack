import axios from "axios"

const url = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(url).then(res => res.data)
} 


const addPerson = (personObject) => {
    return axios.post(url ,personObject ).then(res => res.data)
} 

const deletePerson = (id) => {
    axios.delete(`${url}/${id}`)
} 

const modefieNumber = (id , newNumber) => {
    return axios.put(`${url}/${id}` , newNumber).then(res => res.data)
} 

export default {getAll , addPerson , deletePerson,modefieNumber}