import Nav from "./Nav";
import TitleSort from "./TitleSort";
import TagSort from "./TagSort";
// import { useState } from "react";

function Home() {
  //   const [notes, setNotes] = useState([]);
  //   const [displayNotes, setDisplayNotes] = useState(notes);
  return (
    <main>
      <Nav />
      <TitleSort />
      <TagSort />
      {/* <NotesList /> */}
    </main>
  );
}

export default Home;
