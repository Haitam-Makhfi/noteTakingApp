import { useState, useContext } from "react";
import { notesContext } from "../App";
import { useNavigate } from "react-router";
import Nav from "./Nav";
import TitleSort from "./TitleSort";
import TagSort from "./TagSort";
export default function CreateNote() {
  const [titleValue, setTitleValue] = useState("");
  const [tagValue, setTagValue] = useState([]);
  const [noteValue, setNoteValue] = useState("");
  const [id, setId] = useState(101);
  const navigate = useNavigate();
  const { setNotes } = useContext(notesContext);
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
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((data) => {
            setNotes((n: any) => [...n, data]);
            setId((p) => p + 1);
          })
          .then(() => navigate("/"))
          .catch((err) => console.log(err));
      });
  }
  return (
    <main>
      <Nav />
      <TitleSort setTitleValue={setTitleValue} />
      <TagSort setTagValue={setTagValue} />
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
