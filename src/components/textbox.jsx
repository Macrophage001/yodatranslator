import React from 'react'
import text from '../style/textbox.css'

const Textbox = ({ text, setText, handleTextTranslation }) => {
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleTextTranslation();
        console.log(text);
    }

    return (
        <div>
                  
                 

            <form onSubmit={handleSubmit} className='box'>
                <textarea name="Textbox" id="textbox" cols="30" rows="10" value={text} onChange={handleChange}></textarea>
                <br/>
              
                <input type="submit" value="Submit" className='submit'/>
            </form>
        </div>
    )
}

export default Textbox;