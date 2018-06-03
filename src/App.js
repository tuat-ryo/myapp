import React, { Component } from 'react';
import Toppage from './toppage.jsx';
import Works from './works.jsx'
import Op from './op.jsx'
import Posts from './posts.jsx'
import Post from './post.jsx'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  browserHistory,
  withRouter,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
          <div style={{position:'absolute',width: '100vw',height:'100vh'}}>
            <Route exact path='/myapp' component={Toppage} />

          </div>
       </Router>
    );
  }
}

export default App;
