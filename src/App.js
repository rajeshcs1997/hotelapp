import Navbar from './components/navbar/Navbar'
import Filter from './components/filter/Filter'
import Hotelcard from './components/hotelcard/Hotelcard'
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="leftside">
        <Filter />
      </div>
      <div className="rightside">
        <Hotelcard />
      </div>
    </div>
  );
}

export default App;
