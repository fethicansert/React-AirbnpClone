import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import Hero from './hero';
import Card from './card';
import CardContainer from './card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


function App(){
  return (
    <div className='app-container'>
        <Header />
        <Hero />
        <CardContainer />
    </div>
  );
}