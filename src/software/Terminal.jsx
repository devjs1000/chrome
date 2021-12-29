import React ,{useState, useContext} from 'react';
import { contxt } from '../mainContext';
const Terminal = () => {
    const ctx = useContext(contxt);
  
    
    const [cmd, setCmd]=useState([])
    const [cmdText, setCmdText]=useState()
    const commander=(x)=>{
        let result='error '+x+' command is not valid'
        let p1=x.trim().split(' ')
        let p2=p1[0]
    switch (p2) {
        case 'echo':
            p1.shift()
            result=p1.join(' ')
            break;
        case 'exit':
            let dd=ctx.apps.map(a=>{
                if(a.key=='com.terminal'){
                  a.active=false
                }
                return a
              })
              ctx.setApps(dd)
        default:
            break;
    }
return (
    <div>
        <div className="flex">
        <span className='text-green-400 mr-2'>@root/kali: </span>
        <div>{x}</div>
        </div>
        <div>{result}</div>
    </div>
)
    }
    const runCmd=()=>{
       setCmd([...cmd, commander(cmdText)])
       setCmdText('')
    }
    return (
        <div className='bg-gray-800 text-white overflow-auto' style={{height:'88.5vh'}}>
            <div className='overflow-auto'>
                {cmd}
            </div>
            <div className='flex '>
                <span className='text-green-400 mr-2'>@root/kali: </span>
            <input type="text" onKeyUp={(e)=>{if(e.keyCode==13){runCmd()}}} value={cmdText} onChange={(e)=>{setCmdText(e.target.value)}} className='bg-transparent w-full outline-none' />

            </div>
        </div>
    );
}

export default Terminal;
