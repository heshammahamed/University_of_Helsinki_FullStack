import { useState , useEffect } from 'react'
import Filter from './component/filter'
import Form from './component/form'
import Persons from './component/persons'
import Notification from './component/notification'
import personsApi from './services/personsApi'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personsApi
      .getAll()
      .then (data => {
        setPersons(data)
      })
  },[])


  const [showAll , setShow] = useState(true)
  // this state used to controll the input elemnts
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  const [mess, setMessage] = useState(null)
  const [state, setState] = useState(null)

  // here you could add some restrict for the filtring
  const showNumberList = showAll ? persons : persons.filter(e => (e.name).toLowerCase().includes(filter.toLowerCase()))


  const submitHandle = (event) => {
    event.preventDefault()

    // add the name a new object to a object
    const newObject = {name : newName , number : newNumber}

    // this array locate all the persons names and numbers as string to compare them with the new added name
    const array = persons.map(p => {
      return JSON.stringify(p.name)
    })

    // if added name is not in the list of names so we will add him
    if (!array.includes(JSON.stringify(newObject.name))) {

    // add the person number to the server

     personsApi
      .addPerson(newObject)
      .then (data => {
          // update the state
          setPersons(persons.concat(data))
          setMessage('the new  number is added')
          setTimeout(() => {
              setMessage(null)
           },5000)
        })

    }else {
      if (window.confirm('do you want to replace the old number with new one')) {
        const updatePerson= persons.find(p => p.name == newObject.name)

          personsApi
            .modefieNumber(updatePerson.id , newObject)
            .then(data => {
              setPersons(persons.map(p => p.name == data.name ? data : p))
              setMessage('the number is changed')
              setTimeout(() => {
                  setMessage(null)
               },5000)
              }
            )
            .catch (() => {
              setMessage(`${newObject.name} is deleted from the server`)
              setState('error')
              setTimeout(() => {setMessage(null);setState(null)} , 5000)
            })
            
        }}

    // restart the input value
    setNewName('')
    setNumber('')
  }


  // three input handler functions
  const nameHandler = (event) => {
    setNewName(event.target.value)
  }

  const numberHandler = (event) => {
    setNumber(event.target.value)
  }

  const handleDelete = (id) => {

    if (window.confirm('you sure you wanr to delete this number?')) {
      personsApi.deletePerson(id)
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const filterHandle = (event) => {
    (event.target.value === '') ? setShow(true) : setShow(false)
    setFilter(event.target.value)
  }


  return (

    <div>

    <Filter eventHandler = {filterHandle}/>
    <Notification message={mess}  error = {state} />
      <h2>Phonebook</h2>
      <Form submitHandle = {submitHandle} nameHandle = {nameHandler} numberHandle = {numberHandler} name = {newName} number = {newNumber}/>
      <h2>Numbers</h2>
      {showNumberList.map (p => 
        <Persons key = {p.id} personName = {p.name} personNumber = {p.number} deleteThePerson = {() => handleDelete(p.id)} />
      )}
    </div>
  )
}

export default App