import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// import Home from './app/screens/home/home';
import { Home } from './app/screens/home';
import Eprofilepage from './app/screens/eprofile-page/eprofile-page';
import Digitisationpage from './app/screens/digitisation-page/digitisation-page';
import Decisions from './app/screens/digitisation-page/decisions/decisions';
import {baseStyles} from './app/components/global/index';

// import AboutComponent from "./screens/about/about";
// import Links from "../app/components/navbar/navbar";


class RouterComponent extends Component{
      render(){
        baseStyles();
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/eprofile-page" component={Eprofilepage} />
                    <Route path="/digitisation-page" component={Digitisationpage}/>
                    <Route path="/decisions" component={Decisions}/>
                    {/*<Route path="/about" component={AboutComponent} />*/}
                </div>
            </Router>
        )
    }

}


export default RouterComponent;