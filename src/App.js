import React  from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Dialogs from './components/Dialogs(0)';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar />
        <div  className = 'wrappContent'>
          <Route path ='/dialogs' 
           render ={ () => <Dialogs  store={props.store} />  } />
          <Route path ='/profile' 
           render = { () => <Profile 
            pointBlog={props.state.pointBlog}
            dispatch={props.dispatch} 
              />
          }/>
          <Route path = '/news' component = { News }/>
          <Route path ='/music' component = { Music}/>
          <Route path ='/settings' component ={ Settings}/>
        </div>
        <Footer />
      </div>
  );
}

export default App;
