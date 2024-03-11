import React, {  useState } from 'react';

const Trafficlight = () => {
    const [color, setColor] = useState("");

    const changeColor = color => {
        setColor(color);
    };
    

    return (
        <div className='container text-center text-white'>
            <div className='bar bg-dark'></div>
            <div className='backGround'>
            <div className='Red p-2'>
                <button className={`BtnRed ${color === 'red' ? 'active' : ''}`} type="button" onClick={() => changeColor("red")}>
                   
                </button>
            </div>
            <div className='Yellow p-2'>
                <button className={`BtnYellow ${color === 'yellow' ? 'active' : ''}`} type="button" onClick={() => changeColor("yellow")}>
                  
                </button>
            </div>
            <div className='Green p-2'>
                <button className={`BtnGreen ${color === 'green' ? 'active' : ''}`} type="button" onClick={() => changeColor("green")}>
                   
                </button>
            </div>
            <div className='Purple'>
                <button className={`BtnPurple ${color === 'purple' ? 'active' : ''}`} type="button" onClick={() => changeColor("purple")}>
                  click to add Purple light! 
                </button>
            </div>
        </div>
        </div>
    );
};

export default Trafficlight;
