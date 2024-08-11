import Parts from "./part"

const Content = ({parts}) => {

    

    return (
        <div>
            {parts.map(part => 
                <Parts key = {part.id} content = {part}/>
            )}

            <h4>Total of {parts.reduce ((sum , part) =>  sum += part.exercises , 0)} exercises </h4>
        </div>

    )
}

export default Content