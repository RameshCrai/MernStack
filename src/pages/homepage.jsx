import { Navbar } from "../Components/navabar";
import { Footer } from "../Components/Footer";
import { HomeContent } from "../Components/homecontent";
import "./Styles/style.css";

export const HomePage = () => {
  return (
    <>
      <div className="header">
        <Navbar></Navbar>
      </div>

      <HomeContent></HomeContent>
      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  );
};
