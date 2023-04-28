import React from 'react'
import {Myimage, Myabout,Mydata} from './function-mydata'
import MsgBox from './function-props'
import Caledar from './class-components'
import { Navber } from './function-components'
import MsgBox2 from './class-props'
import List from './list-comp'



function App() {

  return (<List/>)

 // return   [<Navber/>,<Myabout/>,<Myimage/>,<Mydata/>,<Caledar/>,<MsgBox/>,<MsgBox2/>]
  
/*return(
  <MsgBox2 
  text="Useing props in function component"
  color="red"
  bgColor="#ccc"
  fontSize="16px"
  border="dotted 1px black"
  />
)*/

}

export default App;