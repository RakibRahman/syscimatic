import "./App.css";
import { RedoUndo } from "./components/RedoUndo/RedoUndo";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-[480px] border mx-auto mt-10">
        <RedoUndo />
      </div>
    </>
  );
}

export default App;
