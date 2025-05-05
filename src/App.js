import { AddNote } from "./Components/AddNote";
import ShowData from "./Components/ShowData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Mini-Notes</h1>
      <AddNote/>
      <ShowData/>
    </div>
  );
}
