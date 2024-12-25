import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
//import React from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const [selected, setSelected] = useState('');

  function onChange (event)  {
    setDollars(event.target.value);
  };
  function onChoose (event)  {
    setSelected(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10").then((response) => 
    response.json()).then(json =>{
      setCoins(json);
      setLoading(false);
  });
  }, [])
  return <div>
    <h1>The Coins!({coins.length})</h1>
    {loading ? <strong>Loading...</strong> : null}
    <select value={selected} onChange={onChoose}>
      <option value="">--Please choose an option--</option>
      {coins.map((coin) => <option value={coin.name}>{coin.name} ({coin.symbol}) : {dollars/coin.quotes.USD.price}USD</option>)}
    </select>
    <form>
      
      <input onChange={onChange} value={dollars}></input>
      <h4>{dollars} dollars can be changed to {selected}</h4>
    </form>
      </div>;
}

export default App;
