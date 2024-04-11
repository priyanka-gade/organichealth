import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import OrganicUpdate from './components/OrganicUpdate';
import OrganicSearch from './components/OrganicSearch';
import OrganicList from './components/OrganicList';
import OrganicCreate from './components/OrganicCreate';
import OrganicDetail from './components/OrganicDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/list'>List</Link></li>
          <li><Link to='/create'>Create</Link></li>
          <li><Link to='/detail'>Deatail</Link></li>
          <li><Link to='/update'>Update</Link></li>
          <li><Link to='/search'>Search</Link></li>
        </ul>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/list' element={<OrganicList/>}/>
          <Route path='/create' element={ <OrganicCreate/>}/>
          <Route path='/detail' element={<OrganicDetail/>}/>
          <Route path='/update' element={<OrganicUpdate/>}/>
          <Route path='/search' element={<OrganicSearch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
