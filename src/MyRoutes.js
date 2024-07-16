import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import About from "./pages/about"
const MyRoutes =()=>{
    return (
      <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
      </Router> 
    )
}

export default MyRoutes;