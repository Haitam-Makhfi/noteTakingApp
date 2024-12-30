import { useState, useContext, useEffect } from "react";
import { notesContext } from "../App";
import { useNavigate, useParams } from "react-router";
import Nav from "./Nav";
import TitleSort from "./TitleSort";
import TagSort from "./TagSort";
export default function CreateNote({ id, setId }: { id: number; setId: any }) {
  const [titleValue, setTitleValue] = useState("");
  const [tagValue, setTagValue] = useState([]);
  const [noteValue, setNoteValue] = useState("");
  const navigate = useNavigate();
  const { notes, setNotes } = useContext(notesContext);
  const { noteId } = useParams();
  useEffect(() => {
    if (noteId) {
      notes.map(
        (note: {
          data: any;
          noteValue: string;
          titleValue: string;
          tagValue: string[];
          id: number;
        }) => {
          if (note.id == JSON.parse(noteId)) {
            setTitleValue(note.titleValue);
            setTagValue(note.tagValue);
            setNoteValue(note.noteValue);
          }
        }
      );
    }
  }, [noteId]);
  function makePost() {
    const text = { content: noteValue };
    fetch("https://api.apyhub.com/convert/md/html/json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apy-token":
          "APY0DO4Uvp3UBqOGBWOCHd66DAQSS8CPtEBBR190z0MMuNqXhil7mpqj0ScWvCVy",
      },
      body: JSON.stringify(text),
    })
      .then((res) => res.json())
      .then((data) => {
        const payload = { data, noteValue, titleValue, tagValue, id };
        console.log(payload);
        setNotes((n: any) => [...n, payload]);
        setId((p: number) => p + 1);
        navigate("/");
      });
    noteId &&
      setNotes(
        (
          n: {
            data: any;
            noteValue: string;
            titleValue: string;
            tagValue: string[];
            id: number;
          }[]
        ) => n.filter((note) => note.id !== JSON.parse(noteId))
      );
  }
  return (
    <main>
      <Nav />
      <TitleSort setTitleValue={setTitleValue} titleValue={titleValue} />
      <TagSort setTagValue={setTagValue} tagValue={tagValue} />
      <section className="note-section">
        <label htmlFor="note"></label>
        <textarea
          rows={12}
          name="note"
          id="note"
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
        ></textarea>
      </section>
      <div className="creat-note-btns">
        <button>cancel</button>
        <button onClick={makePost}>save</button>
      </div>
    </main>
  );
}
