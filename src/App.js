import Navbar from './components/navbar/Navbar'
import Filter from './components/filter/Filter'
import Hotelcard from './components/hotelcard/Hotelcard'
import './App.css'
import React, { useState } from 'react';
function App() {
  const [search, setSearch] = useState('');
  const [ratingstate, setRatingState] = useState([]);
  const [value, setValue] = useState([0, 100]);

  const onSearch = (val) =>{
    setSearch(val)
  }

  const onPrice = (val) =>{
    let obj=Object.entries(val);
    let array = obj.filter(([key, value]) => value== true)
     setRatingState(array)
  }

   const price = (val) =>{
    setValue(val)
  }


  return (
    <div className="App">
      <Navbar onSearch={onSearch}/>
      <div className="leftside">
        <Filter onPrice={onPrice} price={price}/>
      </div>
      <div className="rightside">
        <Hotelcard search={search} ratingstate={ratingstate} value={value}/>
      </div>
    </div>
  );
}

export default App;
