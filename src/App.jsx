import React, { useState } from 'react'
import Textbox from './components/textbox';

import './App.css';
import Yoda from './components/yoda';
import axios from 'axios';

const App = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const tryCatch = (t, e = (err) => console.error(err)) => {
    return function () {
      try {
        t(arguments);
      } catch (err) {
        e(err);
      }
    }
  }

  const handleTextTranslation = () => {
    tryCatch(async () => {
      const response = await axios
        .get(`https://api.funtranslations.com/translate/yoda.json`, { params: { text: text } });
      setTranslatedText(response.data.contents.translated);
      console.log(response.data)
    })();
  }

  return (
    <div>
      <Textbox text={text} setText={setText} handleTextTranslation={handleTextTranslation} />
      <Yoda translatedText={translatedText}/>
    </div>
  );
}

export default App;
