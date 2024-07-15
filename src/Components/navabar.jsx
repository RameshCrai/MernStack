import code from './Images/code.png'; 

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
                        <span>Home</span>
                        <span>About us</span>
                        <span>Contact</span>
                        <span>Privacy</span>
                    </div>
                </div>
            </div>
        </>
    );
};
