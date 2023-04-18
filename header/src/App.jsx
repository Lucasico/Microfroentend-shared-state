import { store } from "StoreModule/store";

import "./App.css";

function App() {
  const { title } = store((state) => state);
  return (
    <div className="header-app">
      Eu sou um Header microfrotend da pagina - {title}
    </div>
  );
}

export default App;
