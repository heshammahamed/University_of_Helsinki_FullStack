const Form = (props) => {
    return (
        <form onSubmit={props.submitHandle}>
            <div>
                name: <input placeholder='the person name' type='name' value={props.name} onChange={props.nameHandle}/>
            </div>
            <div>
                number: <input placeholder='the person number' type='number' value={props.number} onChange={props.numberHandle}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}

export default Form