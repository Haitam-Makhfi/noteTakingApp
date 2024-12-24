import { BrowserRouter, Routes, Route } from "react-router";
import { useState, createContext } from "react";
import Home from "./components/Home";
import CreateNote from "./components/CreateNote";
export const tagContext = createContext();
export const notesContext = createContext();
function App() {
  const [tagArray, setTagArray] = useState(["work", "personnel", "chopping"]);
  const [notes, setNotes] = useState([
    {
      note: "hello world",
      titleValue: "title",
      id: 1,
      tagValue: ["work", "personnel"],
      data: "data",
    },
  ]);
  return (
    <BrowserRouter>
      <tagContext.Provider value={{ tagArray, setTagArray }}>
        <notesContext.Provider value={{ notes, setNotes }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createNote" element={<CreateNote />} />
          </Routes>
        </notesContext.Provider>
      </tagContext.Provider>
    </BrowserRouter>
  );
}

export default App;
