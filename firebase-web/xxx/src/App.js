import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./components/admin/Admin";
import Home from "./components/Home/Home";

import Upload from "./components/Upload/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/:slug" element={<Upload/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
