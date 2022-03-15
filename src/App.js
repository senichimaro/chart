import React, { useEffect, useState } from 'react'
import axios from 'axios'
import rd3 from 'react-d3-library'
import './App.css';

const BarChart = rd3.BarChart;

function App() {
  const [state, setState] = useState({d3: ''})
  
  useEffect(() => {

    (async () => {
      let data = {}
      data.width = 500;
      data.height = 750;
      data.margins = {top: 20, right: 10, bottom: 0, left: 10}
      data.yAxisLabel = 'Y VALUE';
      data.ticks = 10;
      data.barClass = 'barChart';
      data.dataset = []
      const response = await axios(`https://apidatos.ree.es/es/datos/demanda/evolucion?start_date=2022-01-01T00:00&end_date=2022-03-06T23:59&time_trunc=day`)
      const values = response.data.included[0].attributes.values
      values.forEach(item => (data.dataset.push({label: item.datetime.split("T")[0],value:item.value})))
      console.log("values",values)
      console.log("data.dataset",data.dataset)
      setState({d3:data})
    })()
  
  },[])

  return (
    <div className="App">
      <header className="App-header">
        {
          Object.keys(state.d3).length
            ? <BarChart data={state} />
            : "null"
        }
      </header>
    </div>
  );
}

export default App;
