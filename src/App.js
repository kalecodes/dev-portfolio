import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';

function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Skills />
        </main>
      </div>
  );
}

export default App;
