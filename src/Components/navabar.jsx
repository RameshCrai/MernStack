import code from './Images/code.png'; 
import './Styles/style.css'
export const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-4">
                        <div className="logo">
                            <img src={code} alt="Code Logo" />
                        </div>
                    </div>
                    <div className="col-md-8 col-8">
                        <strong>Home</strong>&nbsp;
                        <strong>About us</strong>&nbsp;
                        <strong>Contact</strong>&nbsp;
                        <strong>Privacy</strong>
                    </div>
                </div>
            </div>
        </>
    );
};
