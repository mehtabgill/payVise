import React from 'react';
import './App.css';
import icon from './assets/images/icon.png';
import screenshot from './assets/images/app-screenshot.png';
import anmol from './assets/images/anmol.jpg';
import mehtab from './assets/images/mehtab.jpg';
import Hero from './components/Hero/Hero';
import GenerateQR from './components/GenerateQR/GenerateQR';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (

    
<div>

{/* Hero Sections */}
<Router>
      <Switch>
        <Route path="/" exact component={Hero}/>
        <Route path ="/qr/:memberId?" component={GenerateQR}/>
        <Route path="/qr" component={GenerateQR}/>
        
      </Switch>
</Router>





</div>



  );
}

export default App;
