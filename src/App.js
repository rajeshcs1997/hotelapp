import Navbar from './components/navbar/Navbar'
import Filter from './components/filter/Filter'
import Hotelcard from './components/hotelcard/Hotelcard'
import './App.css'
import React, { useState } from 'react';
function App() {
  const [search, setSearch] = useState('');
  const [ratingvalue, setRatingvalue] = useState([]);
  const [value, setValue] = useState([0, 100]);
  const [propertyvalue, setPropertyvalue] = useState ('')

  const onSearch = (val) =>{
    setSearch(val)
  }

  const onPrice = (val) =>{
    let obj=Object.entries(val);
    let array = obj.filter(([key, value]) => value== true)
  }

   const price = (val) =>{
    setValue(val)
  }
  const rating = (val) =>{
	setRatingvalue(val)
  }
  const property = (val) =>{
	setPropertyvalue(val)
  }
  return (
    <div className="App">
      <Navbar onSearch={onSearch}/>
      <div className="leftside">
        <Filter onPrice={onPrice} price={price} rating={rating} property={property}/>
      </div>
      <div className="rightside">
        <Hotelcard search={search} ratingvalue={ratingvalue} value={value} propertyvalue={propertyvalue}/>
      </div>
    </div>
  );
}

export default App;
