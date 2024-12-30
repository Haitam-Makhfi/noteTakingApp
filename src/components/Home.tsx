import Nav from "./Nav";
import TitleSort from "./TitleSort";
import TagSort from "./TagSort";
import NotesList from "./NotesList";
import { useState, useContext } from "react";
import { notesContext } from "../App";
function Home() {
  const { notes } = useContext(notesContext);
  // const [displayNotes, setDisplayNotes] = useState(notes);
  const [tagValue, setTagValue] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  return (
    <main>
      <Nav />
      <TitleSort setTitleValue={setTitleValue} titleValue={titleValue} />
      <TagSort setTagValue={setTagValue} tagValue={tagValue} />
      <NotesList notes={notes} />
    </main>
  );
}

export default Home;
