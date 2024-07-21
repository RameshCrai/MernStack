import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import About from "./pages/about"
import MainLayout from "./Layouts/mainLayout";
const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes;