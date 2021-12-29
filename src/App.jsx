import { useState , useContext} from 'react'
import {Routes, Route} from 'react-router-dom';
import Bar from './bar/Bar';
import Desktop from './desktop/Desktop';
import {contxt} from './mainContext'
function App() {
const ctx=useContext(contxt)
  return (
    <div className="App" style={{filter:`brightness(${ctx.brightness*10}%)`, height:'100vh', overflow:'hidden'}}>
      <Routes>
        <Route path="/" element={<Desktop/>} />
      </Routes>
      <Bar/>
    </div>
  )
}

export default App
