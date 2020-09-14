import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Switch ,Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Footer from './Footer'
export default function App() {
    return (
        <div className=''>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home}  />
                <Route exact path='/about' component={About}  />
                <Route exact path='/service' component={Service}  />
                <Route exact path='/contact' component={Contact}  />
            </Switch>
            <Footer />
        </div>
    )
}
