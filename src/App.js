import Navbar from "./navbar";
import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./blogdetails";
import NotFound from "./notfound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
