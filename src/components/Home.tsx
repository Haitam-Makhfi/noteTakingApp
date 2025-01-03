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
    setDisplayNotes(
      notes.filter((note: noteType) => {
        return (
          (titleValue == "" || titleValue == note.titleValue) &&
          (tagValue.length == 0 ||
            tagValue.every((tag) => note.tagValue.some((el) => tag == el)))
        );
      })
    );
  }, [titleValue, tagValue, notes]);
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
