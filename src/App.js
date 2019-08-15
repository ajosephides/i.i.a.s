import React from 'react';
import RecipesList from './components/RecipesList'
import './App.css';

function App() {
  return (
    <div>
      <div>
        <h3 className="fixed-top" align='center' style={{fontFamily: "Pacifico, cursive", marginTop: '10px'}}>It is always soup</h3>
      </div>
      <div>
        <RecipesList />
      </div>
    </div>
  );
}

export default App;
