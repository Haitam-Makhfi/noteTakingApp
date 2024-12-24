import Nav from "./Nav";
import TitleSort from "./TitleSort";
import TagSort from "./TagSort";
import NotesList from "./NotesList";
import { useState, useContext } from "react";
import { notesContext } from "../App";
function Home() {
  const { notes } = useContext(notesContext);
  // const [displayNotes, setDisplayNotes] = useState(notes);
  return (
    <main>
      <Nav />
      <TitleSort />
      <TagSort />
      <NotesList notes={notes} />
    </main>
  );
}

export default Home;
