import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/admin/AdminPanel";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
          <Route path="/admin">
            <Route index element={<AdminPanel/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
          <Route path="*" element={<div className="text-2xl h-screen">404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
