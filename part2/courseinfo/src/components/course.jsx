import Header from "./Header"
import Content from "./content"
const Course = ({course}) => {
    return (
        <div>
            <Header text = {course.name}/>
            <Content parts = {course.parts}/>
        </div>
    ) 
}

export default Course