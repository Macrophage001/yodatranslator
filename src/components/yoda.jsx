import React from 'react' 

import yoda from '../style/yoda.css'

const Yoda = (props) => {
    console.log(props)
    return(
        <div className='bodyYoda'>
            <img src='/img/yoda.png'></img>
            <div>
            <h3 className='response'>Yoda's Response :</h3>
            </div>
            {/* <img src='/img/yoda.png'></img> */}
        </div>
    )
};


export default Yoda;