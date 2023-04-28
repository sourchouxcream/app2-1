import React from 'react'

export default function MsgBox(props){
    const divStyle={
        margin: '10px',
        padding: '5px',
        color: props.color,
        backgroundColor: props.bgColor,
        border: props.border
    }
    return
        <div Style={divStyle}>{props.text}</div>
}