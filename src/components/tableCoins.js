import React from "react";
import CoinRow from "./coinRow";

const tittles = ['#' ,'Coin' , 'Price' , 'Price Change' , '24h Volume']

const TableCoins = ({ coins, search }) => {

    const filteredCoins = coins.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase())
    || coin.symbol.toLowerCase().includes(search.toLowerCase()))

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {tittles.map((coin , index) =>(
              <td key={index}> {coin} </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
