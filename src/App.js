import React, {useState} from 'react';
import Header from './Header';
import Content from './Content';      
import './App.css';

function App() {


  return (

    <React.Fragment>

    <Header/>
   
    <Content/>

    </React.Fragment>
  );
}

const ViewsContext = React.createContext();


export default App;

