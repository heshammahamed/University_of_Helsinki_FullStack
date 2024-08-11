const Persons = ({personName , personNumber , deleteThePerson}) => {
    return (
      <p>
        {personName} : {personNumber}
        <button onClick={deleteThePerson}>delete</button>
      </p>
    )
}

export default Persons