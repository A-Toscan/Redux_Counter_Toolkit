import "./App.css";
import Counter from "./components/Counter";
import { store } from "./app/store";
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <h1>Redux - Toolkit</h1>
      <Counter />
    </>
  );
}

export default App;
