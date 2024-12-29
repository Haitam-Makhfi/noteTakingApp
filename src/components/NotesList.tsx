import { useNavigate } from "react-router-dom";
export type propType = {
  notes: {
    data: any;
    noteValue: string;
    titleValue: string;
    tagValue: string[];
    id: number;
  }[];
};
export default function NotesList({ notes }: propType) {
  const navigate = useNavigate();
  function handleClick(id: number) {
    navigate(`/browsNote/${id}`);
  }
  return (
    <>
      {notes.map((note) => (
        <div
          className="note"
          key={note.id}
          onClick={() => handleClick(note.id)}
        >
          <h3>{note.titleValue}</h3>
          <div className="tags-container">
            {note.tagValue.map((tag) => (
              <span className="tags" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
