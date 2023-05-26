import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Skills />
          <Projects />
        </main>
      </div>
  );
}

export default App;
