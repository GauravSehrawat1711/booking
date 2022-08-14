import './App.css';
import { Home } from './Home/Home';
import {List}  from './Hotels/List';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {EachHotel} from './EachHotel/Eachhotel'
function App() {
  return (
   <>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/hotel" element={<EachHotel/>}/>
    </Routes>
    </Router>
    </>
    );
}
export default App;
