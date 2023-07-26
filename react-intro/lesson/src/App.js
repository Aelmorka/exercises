import logo from './logo.svg';
import './App.css';

function App() {
  const showCompany = (name, revenue) => {
    return (
      <div id={name}>{name} makes {revenue} every year</div>
    )
  }

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]

  const getClassName = (temperature) => { 
    let res
    if (temperature < 15) {
      res = 'freezing'
    } else if (temperature < 30) {
      res = 'fair'
    } else {
      res = 'hell-scape'
    }
    return res
  }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map(c => {
          return showCompany(c.name, c.revenue)
        }) }
      </div>
      <h4 className='ex-title'>Exercise 1</h4>
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" class={getClassName(34)}></div>
      </div>
    </div>
  )
}

export default App;
