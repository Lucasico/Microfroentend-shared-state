import { store } from "StoreModule/store";

import "./App.css";

function App() {
  const { title } = store((state) => state);
  return (
    <div className="footer-app">
      Eu sou um footer microfrotend da pagina - {title}
    </div>
  );
}

export default App;
