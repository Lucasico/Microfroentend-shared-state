import { store } from "./store";
import "./App.css";

function App() {
  const { title, setTitle } = store((state) => state);

  return (
    <>
      <div className="content-app">
        Eu sou o content microfrotend da pagina - {title}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
