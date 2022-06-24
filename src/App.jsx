import React, { useState } from 'react'
import './App.css';
import Textbox from './components/textbox';

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
