import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router'
import './css/font.css'
import './css/toppage.css'
class Works extends Component {
    constructor(props) {
        super(props);
    }
    state = {
      posts: []
    }


    render() {
        const { posts } = this.state
        var stagewidth =window.innerWidth
        var stageheight =window.innerHeight
        return (
            <div className='top'>


              </div>

        );
    }
}
export default withRouter(Works)
{/*getelementbyid()の中にindex.html<div id="この部分">を書く  */}
