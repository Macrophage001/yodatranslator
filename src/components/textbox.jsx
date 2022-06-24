import React from 'react'

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
            <form onSubmit={handleSubmit}>
                <textarea name="Textbox" id="textbox" cols="30" rows="10" value={text} onChange={handleChange}></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Textbox;