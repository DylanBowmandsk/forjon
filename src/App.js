import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [interactionsTotal, setInteractionsTotal] = useState()
  const [sortedInteractions, setSortedInteractions] = useState()

  useEffect(() => {
    fetch('http://localhost:3001')
    .then(response => response.json())
    .then(data => {setSortedInteractions(sortInteractions(data))
      countInteractions(data, setInteractionsTotal)}
    )
    

  },[])

  return (
    <div className="App">
      <h1>Interaction Breakdown</h1>
      <div className="sector-container">
        { sortedInteractions && sortedInteractions.map((element, key) => {
          return (
            <div className="sectors" key={key}>
              <p>{element.name} - {Math.round(element.interactions / interactionsTotal * 100)}%</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}


//i wasnt 100% sure how i wanted to do this. the alternative used the sector id's to refer to an array index. and i could manipulate and store data that way.
//decided against it.
const sortInteractions = (JsonData) => {
  const sortedArray = []
  const sectors = getSectorNames(JsonData)

  sectors.forEach(sector => {
    var count = 0
    JsonData.forEach(element => {
      if(element.name == sector) count++
    })
    sortedArray.push({name: sector,
    interactions: count})
  })
  return sortedArray
}

//Doing it this way if new sectors are added over time the program runs exactly the same
const getSectorNames = (JsonData) => {
  const sectors = []
  JsonData.forEach((element) => {
    if(sectors.includes(element.name) === false && element.name !== undefined){
      sectors.push(element.name)
    }
  })
  return sectors
}

//if i kept the previous two methods together i wouldnt of needed this one. but i didnt see the harm
const countInteractions = (JsonData, setInteractionsTotal) => {
  var count = 0
  JsonData.forEach(element => {
    count++
  })
  setInteractionsTotal(count)
}
export default App;
