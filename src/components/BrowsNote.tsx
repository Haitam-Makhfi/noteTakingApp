import { useContext } from "react";
import { notesContext } from "../App";
import { useParams } from "react-router";
import { Parser } from "html-to-react";
import { useNavigate } from "react-router";
export default function BrowsNote() {
  const { notes, setNotes } = useContext(notesContext);
  const { noteId } = useParams();
  const htmlParser = new Parser();
  const navigate = useNavigate();
  function handleDelete(id: number) {
    setNotes((n: any) => n.filter((note: any) => note.id !== id));
    navigate("/");
  }
  function handleEdit(id: number) {
    navigate(`/creatNote/${id}`);
  }
  return (
    <>
      {notes.map(
        (note: {
          data: any;
          noteValue: string;
          titleValue: string;
          tagValue: string[];
          id: number;
        }) => {
          return (
            note.id == JSON.parse(noteId) && (
              <section className=" browsNote-section" key={note.id}>
                <nav>
                  <div className="identifier-container">
                    <h2>{note.titleValue}</h2>
                    <div className="tags-container">
                      {note.tagValue.map((tag) => (
                        <span className="tags" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="btn-container">
                    <button onClick={() => handleDelete(note.id)}>
                      delete
                    </button>
                    <button onClick={() => handleEdit(note.id)}>Edit</button>
                  </div>
                </nav>
                {htmlParser.parse(note.data.data)}
              </section>
            )
          );
        }
      )}
    </>
  );
}
