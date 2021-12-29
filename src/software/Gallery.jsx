import React, {useContext} from 'react';
import { contxt } from '../mainContext';
const Gallery = () => {
    const ctx=useContext(contxt)
    return (
        <div className=''>
           {ctx.photos.map(a=>{
               return (
                   <img className='shadow w-48 ' src={a} key={Math.random()+'pic'} />
                      
                  
               )
           })}
        </div>
    );
}

export default Gallery;
