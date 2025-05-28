import React from 'react';
import './design/styles.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './components/common/Layout';
import Home from './components/home';
import Jest from './components/jest';
import History from './components/history';

class App extends React.Component<{},{}>
{
  constructor(props:any){
    super(props);
  }
  
  render:any = () => {
    return    <Router>
                <Layout>
                  <Route path="/" exact component={Home} />
                  <Route path="/jest" component={Jest} />
                  <Route path="/history" component={History} />
                </Layout>
              </Router>
            
  }  
}

export default App;