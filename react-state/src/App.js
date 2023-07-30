import './App.css';
import Hudini from './components/Hudini'
import Home from './components/Home'
import Landing from './components/Landing'
import {useState} from 'react'

function App() {
  let compStore = {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: true,
    currentPage: "Landing"
  }
  let [data, setData] = useState(compStore)
  function changePage() {
    let newStore = JSON.parse(JSON.stringify(data))
    if (newStore.currentPage === 'Landing') {
      newStore.currentPage = 'Home'
    } else {
      newStore.currentPage = 'Landing'
    }
    setData(newStore)
  }
  return (
    <div className="App">
      <Hudini />
      {data.currentPage === 'Landing'
        ? <Landing user = {data.user} item = {data.store.find((item) => item.hottest)} />
        : <Home store = {data.store} discount = {data.shouldDiscount}/>
      }
      <button onClick={changePage} >Change page</button>
    </div>
  );
}

export default App;
