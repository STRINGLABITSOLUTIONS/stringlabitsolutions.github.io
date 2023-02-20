import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<div className="text-2xl h-screen">404 Not Found</div>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
