import { useState } from "react";
import "./App.css";
import { useEffectOnce } from "./hook";

function App() {
  const [counter, setCounter] = useState(0);
  useEffectOnce(() => {
    window.addEventListener("message", (event) => {
      if (event.data === "<YourMessageToParentWindow>") {
        setCounter((e) => e + 1);
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>counter value: {counter}</h3>
        <iframe title="frame1" src="inline.html"></iframe>
      </header>
    </div>
  );
}

export default App;
