import { BrowserRouter, Routes, Route } from "react-router";
import { useState, createContext } from "react";
import Home from "./components/Home";
import CreateNote from "./components/CreateNote";
import BrowsNote from "./components/BrowsNote";
import MarkdownView from "react-showdown";
export const tagContext = createContext();
export const notesContext = createContext();
function App() {
  const [tagArray, setTagArray] = useState(["work", "personnel", "chopping"]);
  const [notes, setNotes] = useState([
    {
      noteValue: "example",
      titleValue: "Exp",
      id: 1,
      tagValue: ["work", "personnel"],
      data: (
        <MarkdownView
          markdown="# 🌟 Example 🌟

---

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)  
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square)  
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)  
![Contributions](https://img.shields.io/badge/Contributions-Welcome-orange?style=flat-square)  

---

## 🗂️ Table of Contents
- [📖 About the Project](#-about-the-project)
- [✨ Features](#-features)
- [⚙️ Installation](#-installation)
- [🚀 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [📬 Contact](#-contact)

---

## 📖 About the Project
🎯 **Purpose:** Briefly explain what your project does, why you made it, and its purpose.  
🌈 Add a motivational or exciting reason why people should use it!

### 🛠️ Built With
- 🧩 **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)**  
- 🎨 **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**  
- ⚡ **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**  
- 🏗️ Add other libraries or frameworks here!

---

## ✨ Features
- ✅ Feature 1: Brief description.
- ✅ Feature 2: Brief description.
- ✅ Feature 3: Brief description.

---

## ⚙️ Installation
Follow these steps to set up the project locally:  

1. Clone the repo:  
   ```bash
   git clone https://github.com/your-username/project-name.git
    ```"
        />
      ),
    },
  ]);
  const [id, setId] = useState(101);
  return (
    <BrowserRouter>
      <tagContext.Provider value={{ tagArray, setTagArray }}>
        <notesContext.Provider value={{ notes, setNotes }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/createNote/:noteId?"
              element={<CreateNote id={id} setId={setId} />}
            />
            <Route path="/browsNote/:noteId" element={<BrowsNote />} />
          </Routes>
        </notesContext.Provider>
      </tagContext.Provider>
    </BrowserRouter>
  );
}

export default App;
