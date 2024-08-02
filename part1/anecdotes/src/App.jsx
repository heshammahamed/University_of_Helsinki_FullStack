import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0 , 0 , 0 , 0 , 0 , 0 , 0 , 0])
  const [highest, sethighest] = useState(0)

  // function to choose the rancdom number 
  const randomNumberInit = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const addVote = () => {
    const copy = [...votes]
    copy[selected] +=1

    // after to change the state of the vote
    setVote(copy) 

    // we start to check if the highest voted cote is changed
    // first we make copy of the array of votes
    let arragnge = [...copy]
    // rgen we sort the array to make the highest vote cote in the end of the array
    arragnge.sort()
    arragnge = arragnge[arragnge.length - 1]
    // then we serach of the index of the highest vote in the votes array 
    const positionOfHighVote = copy.indexOf(arragnge)
    sethighest(positionOfHighVote)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>vote {votes[selected]}</p>
      <button onClick = {addVote}>Vote</button>
      <button onClick = {randomNumberInit}>next anecdotes</button>
      <h1>Anecdote with most voted</h1>
      <p>{anecdotes[highest]}</p>
      <p>has {votes[highest]} votes</p>
      
    </div>
  )
}

export default App