import React from 'react';

export function MyAbout(){
    const aStyle={
        display: 'inline-block',
        color: 'blue',
        margin: '10px',
        textDecoration: 'none'
    }
    return (
        <div style={{textAlign: 'center', color: 'navy'}}>
            <img src="./images/blink182.jpg" width="100%" />
            <h2>Hello Component</h2>
            <br/><br/><br/>
        </div>
    )
}
