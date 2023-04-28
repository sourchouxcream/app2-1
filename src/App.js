import React from 'react'
import {MyAbout,MyImage,MyData} from './function-components'
import Calendar from './class-components'
import MsgBox from './function-props'

function App() {
 return [<MyAbout />,<Calendar />, <MyImage />, <MyData />]

  return(
        <MsgBox 
          text="Useing props in function component"
          color="red"
          bgColor="#ccc"
          fontSize="18pt"
          border="dotted 1px black"
        />
  )
}

export default App;