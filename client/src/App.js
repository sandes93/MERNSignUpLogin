import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/pages/Landing/Landing';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Other from './components/pages/Other/Other';
import Profile from './components/Profile/Profile';
import StartUp from './components/pages/StartUp/StartUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContextProvider } from './store';

import './App.css';
import PrivateRoute from './Auth';

function App() {
    return (
        <AppContextProvider>
            <Router>
                <div className="pl-0 pr-0 m-0 container-fluid">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="p-0 m-0 container-fluid">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <PrivateRoute exact path="/dashboard" component={(Dashboard)} />
                        <PrivateRoute exact path="/other" component={(Other)} />
                        <PrivateRoute exact path="/startUp" component={StartUp} />
                    </div>
                </div>
            </Router>
        </AppContextProvider>
    );
}

export default App;
