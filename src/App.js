import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portofolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div className="App">
      <Header
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Header>
      <main>
        {!portfolioSelected ? (
          <About
            setPortfolioSelected={setPortfolioSelected}
          ></About>
        ):(
          <Portofolio></Portofolio>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
