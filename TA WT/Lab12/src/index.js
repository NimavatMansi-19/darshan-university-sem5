import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Faq from './Faq';
import Others from './Others';
import Layout from './Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Layout/>}>
    <Route path="/" element = {<Home/>}/>
    <Route path="/Contact" element = {<Contact/>} />
    <Route path="/About" element = {<About/>} />
    <Route path="/Faq" element = {<Faq/>} />
    <Route path="/Others" element = {<Others/>} />
    </Route>
  </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
