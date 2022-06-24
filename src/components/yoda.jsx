import React from 'react'
import '../style/yoda.css';

const Yoda = (props) => {
    return (
        <div className='bodyYoda'>
            <img src='/img/yoda.png'></img>
            <div className='response'>
                <h3>Yoda's Response :</h3>
                <p>{props.translatedText}</p>
            </div>
        </div>
    )
};


export default Yoda;