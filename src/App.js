import React, {useState} from 'react';
import Header from './Header';
import RecentGames from './RecentGames';
import LastGame from './LastGame';
import SeasonAverage from './SeasonAverage';
import NavBar from './NavBar';
import Content from './Content';      
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState([]);



  const changeView = (view) => {
    setCurrentView(currentView = view);
  }

  return (

    <ViewsContext.Provider value={[currentView, setCurrentView]}>

    <Header/>

    <NavBar/>
    
    <Content/>


    </ViewsContext.Provider>
  );
}

const ViewsContext = React.createContext();


export default App;

