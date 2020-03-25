import React  from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Dialogs from './components/Dialogs';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import {Route} from "react-router-dom";
import DialogsWrap from './components/DialogsWrep';

const App = (props) => {
// debugger
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar />
        <div  className = 'wrappContent'>
          <Route path ='/dialogs' 
           render ={ () => <DialogsWrap  store={props.store} />  } />
          <Route path ='/profile' 
           render = { () => <Profile store = {props.store} />  }/>
          <Route path = '/news' component = { News }/>
          <Route path ='/music' component = { Music}/>
          <Route path ='/settings' component ={ Settings}/>
        </div>
        <Footer />
      </div>
  );
}

export default App;
