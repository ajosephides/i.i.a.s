import React from 'react';
import RecipesList from './components/RecipesList'
import './App.css';

function App() {
  return (
    <div>
      <div>
        <RecipesList style={{topMargin: 20}}/>
      </div>
    </div>
  );
}

export default App;
