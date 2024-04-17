import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery'
import OrganicUpdate from './components/OrganicUpdate';
import OrganicSearch from './components/OrganicSearch';
// import OrganicList from './components/OrganicList';
import OrganicCreate from './components/OrganicCreate';
import OrganicDetail from './components/OrganicDetail';
import OrganicListFun from './components/OrganicListFun';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#"><img src='./images/Fresh-Healthy.jpg' width='250px' height='100px'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#home"><Link to='/' className='txt'>Home</Link></Nav.Link>
              <Nav.Link href="#about"><Link to='/about' className='txt'>About</Link></Nav.Link>
              <Nav.Link href="#gallery"><Link to='/gallery' className='txt'>Gallery</Link></Nav.Link>
              {/* <Nav.Link href="#lst"><Link to='/lst' className='txt'>Lists</Link></Nav.Link> */}
              {/* <Nav.Link href="#create"><Link to='/create' className='txt'>Create</Link></Nav.Link> */}
              <Nav.Link href="#search"><Link to='/search' className='txt'>Search</Link></Nav.Link>
              <Nav.Link href="#update"><Link to='/update' className='txt'>Update</Link></Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
    </Navbar>
        <Routes>
          <Route index element={<Home/>} />
          {/* <Route path='/list' element={<OrganicList/>}/>------  */}
          <Route path='/about' element={<About/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/lst' element={<OrganicListFun/>}/>
          <Route path='/create' element={ <OrganicCreate/>}/>
          <Route path='/detail' element={<OrganicDetail/>}/>
          <Route path='/update/:id' element={<OrganicUpdate/>}/>
          <Route path='/search' element={<OrganicSearch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
