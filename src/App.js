import './App.css';
import React from 'react';
import Shop from './component/Shop';
function App() {
  let data = [{
    product:"Fancy Product",
    productPrice1:"$40.00 - $80.00",
    productPrice2:"$120.00 - $280.00",
    specialItem:"Special Item",
    specialItemPrice1:"$20.00 ",
    specialItemPrice2:" $18.00",
    salesItem:"Sale Item",
    salesItemPrice1:"$50.00 ",
    salesItemPrice2:"$25.00",
    popularItem: "Popular Item",
    popularItemPrice:"$40.00",
  

  }]
  return (
    <div className="App">
    {
    data.map((e)=> {
    return <Shop data={e} />
    })
  }
    </div>
  );
}

export default App;
