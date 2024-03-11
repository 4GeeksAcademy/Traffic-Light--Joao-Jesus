import React, {  useState } from 'react';

const Trafficlight = () => {
    const [color, setColor] = useState("");

    const changeColor = color => {
        setColor(color);
    };
    

    return (
        <div className='container text-center'>
            <p>Traffic Light</p>
            <div className='Red'>
                <button className={`BtnRed ${color === 'red' ? 'active' : ''}`} type="button" onClick={() => changeColor("red")}>
                   
                </button>
            </div>
            <div className='Yellow'>
                <button className={`BtnYellow ${color === 'yellow' ? 'active' : ''}`} type="button" onClick={() => changeColor("yellow")}>
                  
                </button>
            </div>
            <div className='Green'>
                <button className={`BtnGreen ${color === 'green' ? 'active' : ''}`} type="button" onClick={() => changeColor("green")}>
                   
                </button>
            </div>
            <div className='Purple'>
                <button className={`BtnPurple ${color === 'purple' ? 'active' : ''}`} type="button" onClick={() => changeColor("purple")}>
                  Add Purple light! 
                </button>
            </div>
        </div>
    );
};

export default Trafficlight;
