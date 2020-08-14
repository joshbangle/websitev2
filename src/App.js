import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import Skillset from './components/Skillset/Skillset'
import Projects from './components/Projects/Projects'
import Layout from './components/Layout/Layout'


function App() {
  
  return (
    <div className="App">
      <Layout>
        <Route path='/skillset' component={Skillset} />
        <Route path='/projects' component={Projects}/>
      </Layout>
    </div>
  );
}

export default App;
