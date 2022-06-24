import React, { useState } from 'react'
import './App.css';

const Textbox = ({ text, setText }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea name="Textbox" id="textbox" cols="30" rows="10" value={text} onChange={handleChange}></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

const App = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  return (
    <div className="App">
      <Textbox text={text} setText={setText} />
    </div>
  );
}

export default App;
