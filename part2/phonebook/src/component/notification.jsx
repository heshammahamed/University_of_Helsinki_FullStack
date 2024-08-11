const Notification = ({message , error}) => {

    const messageStyleComplete = {
        
        color : 'green',
        backfroundColor : 'gray',
        borderWidth : 2,
        borderColor : 'green',
        borderStyle : 'solid'
    }

    const messageStyleError = {
        
        color : 'red',
        backfroundColor : 'gray',
        borderWidth : 2,
        borderColor : 'red',
        borderStyle : 'solid'
    }
    
    if (message == null) {
        return null;
    }else {
        return (
            <div>
                <p style={error == 'error' ? messageStyleError : messageStyleComplete}>{message}</p>
            </div>
        ) 
    }
    
}

export default Notification