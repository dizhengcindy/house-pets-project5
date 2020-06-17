import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {store,persistor} from "./redux/store";
import { Provider } from "react-redux";
import {fetchCompanies} from "./redux"
import {fetchServices} from './redux'
import {fetchAllSchedules} from './redux'
import Login from './pages/Login.js'
import Signup from './pages/Signup'
import Home from './pages/Home'
import CompanyShowPage from './pages/CompanyShowPage'
import NavBar from './components/NavBar.js'
import UserProfile from './pages/UserProfile.js'
import UserSchedules from './pages/UserSchedules.js'

import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {

componentDidMount() {
  
  fetchCompanies()(store.dispatch)
  fetchServices()(store.dispatch)
  

}

  render() {
    
    return(
       <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
         <Router>
         <NavBar/>
       <div className="App">
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/user/profile" component={UserProfile}/>
         <Route exact path ="/companies/:id" render={props=><CompanyShowPage {...props}/>} />
         <Route exact path ="/signup" component={Signup}/>
         <Route exact path ="/login" render={props=><Login {...props}/>} />
         <Route exact path ="/schedules" render={props=><UserSchedules {...props}/>} />
       </div>
       </Router>
       </PersistGate>
       </Provider>
     
    )
  }
}

export default App;
