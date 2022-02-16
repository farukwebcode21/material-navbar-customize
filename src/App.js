import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import Drawer from './Pages/Home/Drawer/Drawer';
import { Home } from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import { Navigation } from './Pages/Shared/Navigation/Navigation';
import Search from './Pages/Shared/Navigation/Searchd';
import SearchAppBar from './Pages/Shared/SearchAppBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/drawer' element={<Drawer/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      {/* <Navigation/> */}
    </BrowserRouter>
  );
}

export default App;
