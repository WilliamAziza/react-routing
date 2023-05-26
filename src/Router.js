import React from 'react';
import { BrowserRouter as AppRouter, Link, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contacts from './components/contacts';
import Services from './components/services';
import ServiceDetails from './components/ServiceDetails';

const Router = () => {
    return (
        <AppRouter>
            <nav className='navbar'>
                <Link to='/' className='linkcolor'>Home</Link>
                <Link to='/about' className='linkcolor'>About</Link>
                <Link to='/contacts' className='linkcolor'> Contacts</Link>
                <Link to='/services'className='linkcolor'>Services</Link>
            </nav>
            <Routes>
            <Route  path='/' element= {<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route  path='/services' element={<Services/>}/>
            <Route path='/services/:id' element = {<ServiceDetails/>}/>
            </Routes>
        </AppRouter>
    );
}

export default Router;
