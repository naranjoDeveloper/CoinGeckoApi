import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TableCoins from "./components/tableCoins";

function App() {
  const [Coins, setCoins] = useState([]);

  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&page=1"
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
     <div className="row">
       <input type="text" placeholder="Search a Coin" className="form-control bg-dark text-light border-0 mt-4 text-center" onChange={e=>setSearch(e.target.value)} />
      <TableCoins coins={Coins} search={search} />
     </div>
    </div>
  );
}

export default App;
