import { useState } from 'react'

const Button = ({ text , handle }) => {
  return (
    <button onClick = {handle}>{text}</button>
  )
}

const StatisticsLine = ({ text , value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({values}) => {
  
  // rendering codition
  // if the total is zero then do not render the statistics
  if (values[3] === 0) {
    return(
      <div>
        <h1>Statistics</h1>
        <p>no feedback given</p>
      </div>
    )
  }

  //else render the statistics

  return (
    <div>
      <h1>Statistics</h1>
      <table>
      <StatisticsLine text = "Good"    value = {values[0]}/>
      <StatisticsLine text = "Neutral" value = {values[1]} />
      <StatisticsLine text = "Bad"     value = {values[2]} />
      <StatisticsLine text = "Total"   value = {values[3]} />
      <StatisticsLine text = "Avreage" value = {values[4]} />
      <StatisticsLine text = "Positive" value = {values[5] + '%'} />
      </table>
    </div>
  )
}




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, settotal] = useState(0)
  const [average, setAvreage] = useState(0)
  const [positive, setpositive] = useState(0)

  const handleGood = () => {
    // update the good state
    const newGoodValue = good + 1;
    setGood(newGoodValue)
    //  update the total state
    const newTotal = total + 1
    settotal(newTotal)
    // update the avreage and the positive state
    setAvreage((newGoodValue - bad) / newTotal)
    setpositive((newGoodValue / newTotal) * 100)
  }
  const handleNatural = () => {
    // update the natural state
    const newNatValue = neutral + 1;
    setNeutral(newNatValue)
    //  update the total state
    const newTotal = total + 1
    settotal(newTotal)
    // update the avreage and the positive state
    setAvreage((good - bad) / newTotal)
    setpositive((good / newTotal) * 100)
  }
  const handleBad = () => {
    // update the bad state
    const newBadValue = bad + 1;
    setBad(newBadValue)
    //  update the total state
    const newTotal = total + 1
    settotal(newTotal)
    // update the avreage and the positive state
    setAvreage((good - newBadValue) / newTotal)
    setpositive((good/ newTotal) * 100)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button text = "Good"    handle = {handleGood} />
      <Button text = "Neutral" handle = {handleNatural}/>
      <Button text = "Bad"     handle = {handleBad}/>
      <Statistics values = {[good , neutral , bad , total , average , positive]}/>
    </div>
  )
}


export default App