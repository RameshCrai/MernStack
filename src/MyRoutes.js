import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import About from "./pages/about"
import MainLayout from "./Layouts/mainLayout";
import DisplayProduct from "./Components/Product/DisplayProduct";
import StateCounter from "./Components/StateCounter";
import { Drawer } from "./Components/Drawer";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<DisplayProduct />} />
          <Route path="/state" element={<StateCounter />} />
          <Route path="/drawer" element={<Drawer />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes;