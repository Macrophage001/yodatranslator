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
    })();
  }

  return (
    <div className='body'>
      <h1 className='title'>Yoda Translator</h1>
      <div className='display'>
        <Textbox text={text} setText={setText} handleTextTranslation={handleTextTranslation} />
        <Yoda translatedText={translatedText} />
      </div>


    </div>
  );
}

export default App;
