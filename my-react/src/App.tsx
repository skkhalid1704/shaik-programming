import { CallAPI } from "./components/MyFirstRequest.tsx";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const fetchData = async () => {
    const response = await CallAPI();
    setResponse(response);
    setIsButtonClicked(true);
  };

  return (
    <>
      <h1>Hi! Welcome to my first react code.</h1>
      <p>{response || "Press button to reveal a fact"}</p>
      {isButtonClicked ? (
        <button onClick={fetchData}>Reveal another fact </button>
      ) : (
        <button onClick={fetchData}>Reveal a fact </button>
      )}
    </>
  );
}
export default App;
