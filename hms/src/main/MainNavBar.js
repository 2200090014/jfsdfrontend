import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import './mainnavbar.css'
import Home from './MainPage'
import Contact from './Contact';
import Information from './Information';
import Login from './Login'
export default function MainNavBar()
{
    return (
        <div>
            <br></br><br></br>
            <ul className='navbar'>
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/contact">Contact</Link></li>  
            <li><Link to="/information">Information</Link></li>  
            <li><Link to="/login">Login</Link></li>  
            </ul>

            <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/home'element={<Home/>}/>
                <Route path='/contact'element={<Contact/>}/>
                <Route path='/information'element={<Information/>}/>
                <Route path='/login'element={<Login/>}/>
            </Routes>

        </div>
    );
};