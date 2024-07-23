import code from './Images/code.png'; 
import './Styles/style.css'
import {  NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo">
                            <img src={code} alt="Code Logo" />
                        </div>
                    </div>
                    <div className="col-md-6">
                       <ul>
                        {/* //navlink */}
                        {/* <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li> */}
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/product'>Product</NavLink></li>
                        <li><NavLink to='/state'>State</NavLink></li>
                        <li><NavLink to='/drawer'>drawer</NavLink></li>
                       </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
