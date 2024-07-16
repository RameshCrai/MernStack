import code from './Images/code.png'; 
import './Styles/style.css'
import { Link } from 'react-router-dom';
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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                       </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
