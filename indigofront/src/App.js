
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Home from './components/Home';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
        <Navbar/>
     <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<PrivateComponent/>}>
      <Route path='/search' element={<Search/>}/>
      </Route>
     </Routes>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
