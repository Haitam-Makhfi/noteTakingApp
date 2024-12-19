import { BrowserRouter, Routes, Route } from "react-router";
import { useState, createContext } from "react";
import Home from "./components/Home";
import CreateNote from "./components/CreateNote";
export const tagContext = createContext();
function App() {
  const [tagArray, setTagArray] = useState(["work", "personnel", "chopping"]);
  return (
    <BrowserRouter>
      <tagContext.Provider value={{ tagArray, setTagArray }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creatNote" element={<CreateNote />} />
        </Routes>
      </tagContext.Provider>
    </BrowserRouter>
  );
}

export default App;
