import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portofolio from './components/Portfolio';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Resume from './components/Resume'
import NotFound from './components/NotFound'
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<About ></About>}></Route>
          <Route path="/portfolio" element={<Portofolio></Portofolio>}></Route>
          <Route path='/resume' element={<Resume></Resume>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
