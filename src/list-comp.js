import React from 'react'

export default function List(){
    let color=['red','green','blue','yellow']
    let list = color.map(c => <li>{c}</li> )
   // return <ol>{list}</ol>

    return (
        <ul>
           <li>{color[0]}</li>
        </ul>
    )
}