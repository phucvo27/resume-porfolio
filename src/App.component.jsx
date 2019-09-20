import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SideNav from './components/SideNav/side-nav.components';
import HomePage from './pages/homepage/homepage.component';

class App extends React.Component{

    render(){
        return (
            <BrowserRouter>
                <SideNav />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;