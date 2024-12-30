import Nav from "./Nav";
import TitleSort from "./TitleSort";
import TagSort from "./TagSort";
import NotesList from "./NotesList";
import { useState, useContext, useEffect } from "react";
import { notesContext } from "../App";
type noteType = {
  data: { data: any };
  noteValue: string;
  titleValue: string;
  tagValue: string[];
  id: number;
};
function Home() {
  const { notes } = useContext(notesContext);
  const [displayNotes, setDisplayNotes] = useState<noteType[]>(notes);
  const [tagValue, setTagValue] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  useEffect(() => {
    setDisplayNotes([]);
    notes.forEach((note: noteType) => {
      if (titleValue == "" && compareWithTagValue(note.tagValue) == null) {
        setDisplayNotes((p) => [...p, note]);
      } else if (
        note.titleValue == titleValue &&
        compareWithTagValue(note.tagValue) == null
      ) {
        setDisplayNotes((p) => [...p, note]);
      } else if (titleValue == "" && compareWithTagValue(note.tagValue)) {
        setDisplayNotes((p) => [...p, note]);
      } else if (
        note.titleValue == titleValue &&
        compareWithTagValue(note.tagValue)
      ) {
        setDisplayNotes((p) => [...p, note]);
      }
      return null;
    });
  }, [titleValue, tagValue]);
  function compareWithTagValue(array: string[]) {
    let bool = null;
    tagValue.forEach((el) => {
      array.includes(el) ? (bool = true) : (bool = false);
    });
    return bool;
  }
  return (
    <main>
      <Nav />
      <TitleSort setTitleValue={setTitleValue} titleValue={titleValue} />
      <TagSort setTagValue={setTagValue} tagValue={tagValue} />
      <NotesList notes={displayNotes} />
    </main>
  );
}

export default Home;
