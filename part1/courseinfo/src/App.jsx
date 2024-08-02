//  Header component
//  string -> return <h1> element
const Header = (props) => {

  return(

    <h1>{props.text}</h1>
  )
  
}

//  Part component
//  string , integer -> return <p> element
const Part = (props) => {

  return(
    <p>{props.name} {props.exercise}</p>
  )

}

//  Content component
//  List Of Objects [{name : string , exerscise : int},....] -> <div> of three <Part /> component
const Content = (props) => {

  return(
    <div>
      <Part name = {props.parts[0].name} exercise = {props.parts[0].exercise} />
      <Part name = {props.parts[1].name} exercise = {props.parts[1].exercise} />
      <Part name = {props.parts[2].name} exercise = {props.parts[2].exercise} />
    </div>
  )

}

//  Total component
//  List Of Objects [{name : string , exerscise : int},....] -> <p>
const Total = (props) => {

  let number_of_exercises = 0;

  for (let i = 0 ; i < 3 ; i++) {
    number_of_exercises+= props.number[i].exercise;
  }

  return(
    <p>Numer of exercises {number_of_exercises}</p>
  )

}

const App = () => {

  //  object of {name : string , parts : [{name : string , exerscise : int} , .....]}
  const course = {
    name : 'Half Stack application development',

    parts : [
      {
        name : 'Fundamentals of React',
        exercise : 10
      },

      {
        name : 'Using props to pass data',
        exercise : 7
      },

      {
  
        name : 'State of a component',
        exercise : 14
    
      }
    ]
  }


  return (
    <div>
      <Header text={course.name}/>
      <Content parts = {course.parts} />
      <Total number = {course.parts} />
    </div>
  )
}

export default App