import Nav from "./components/Nav";
import TitleSort from "./components/TitleSort";
import TagSort from "./components/TagSort";
function App() {
  //  const [notes,setNotes]=useState([])
  //  const [displayNotes,setDisplayNotes]=useState(notes)
  //  const [tagArray,setTagArray]=["work" , "personnel", "chopping" ]
  const text = { content: "hello**world**" };
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
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  return (
    <main>
      <Nav />
      <TitleSort />
      <TagSort />
      {/* <NotesList /> */}
    </main>
  );
}

export default App;
