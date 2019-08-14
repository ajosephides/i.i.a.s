import React from 'react';
import RecipesList from './components/RecipesList'
import './App.css';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar fixed="top" >
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Brand className='text-white'>
            It Is Always Soup
          </Navbar.Brand>
        </Navbar.Collapse> 
      </Navbar>  
    <div>
      <RecipesList />
    </div>
    </div> 
  );
}

export default App;
