
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Children from "./components/Children";
import DisplayAll from "./components/DisplayAll";
import ChildrenForm from "./components/ChildrenForm";
import EditChildren from "./components/EditChildren";



function App() {
  return (
    <div className="App">
      <h1>LTFC Academy</h1> <br /> <br /> <br />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll/>} />
          <Route path="/children/:id" element={<Children/>} />
          <Route path="/add" element={<ChildrenForm />} />
          <Route path="/edit/:id" element={<EditChildren />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
