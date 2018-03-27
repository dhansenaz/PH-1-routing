
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import People from './components/People/People'
import {Link} from 'react-router-dom'
import FAQ from './components/About/FAQ/FAQ'
import Company from './components/About/Company/Company'
import Character from './components/Character/Character'
import {Switch} from 'react-router-dom'



export const routes = <div>
   <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/people">People</Link>  
        </nav>
        This is App.js
        <Route exact path='/' component={Home} />
        <Route path='/about' render ={() => <About>
          <Route path='/about/faq'component={FAQ} />
          <Route path='/about/company' component={Company} />
        </About>} />
        <Switch>
            <Route path='/people/:id' component={Character} />
            <Route path='/people' component={People} />
        </Switch>


</div>