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
  return (
    <>
      {notes.map((note) => (
        <div className="note" key={note.id}>
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
