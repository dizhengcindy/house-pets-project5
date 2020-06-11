import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import store from "./redux/store";
import { Provider } from "react-redux";
import {authUser} from "./redux" 
import {fetchCompanies} from "./redux"
import {fetchServices} from './redux'
import Login from './pages/Login.js'
import Signup from './pages/Signup'
import Home from './pages/Home'
import CompanyShowPage from './pages/CompanyShowPage'
import NavBar from './components/NavBar.js'

class App extends Component {
//   componentDidMount(){
//     // fetchUsers()(store.dispatch)
//   fetch('http://localhost:3000/api/v1/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   },
//   body: JSON.stringify({
//     user: {
//       username: "asd",
//       password: "asd",
//       email:"asd@gmail.com"
//     }
//   })
// })
//   .then(r => r.json())
//   .then(console.log)
//   }
componentDidMount() {
  fetchCompanies()(store.dispatch)
  fetchServices()(store.dispatch)
  console.log("inside componentDidMount")
}

  render() {
    return(
       <Provider store={store}>
         <Router>
         <NavBar/>
       <div className="App">
        <Route exact path ="/" component={Home}/>
         <Route exact path ="/companies/:id" render={props=><CompanyShowPage {...props}/>} />
         <Route exact path ="/signup" component={Signup}/>
         <Route exact path ="/login" render={props=><Login {...props}/>} />
       </div>
       </Router>
       </Provider>
     
    )
  }
}

export default App;
