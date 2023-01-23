/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useEffect} from 'react';
import './column.css';
import kulu from './img/video.mp4';
// import axios from 'axios'

const video = () => {
const [head,sethead] = useState(null);

useEffect(() => {
   fetch('https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1')
  .then(data => data.json())
  .then(data=>{
    console.log(data)
    sethead(data);
})
})

  return (
    <div className="two-column-section">
    <div className='para'>
      {/* {head.map(item => (
        <div>
          <h1>{item.heading}</h1>
          <h3>{item.subHeading}</h3>
          <p>{item.description}</p>
        </div>
      ))} */}
      I'm supposed to get the data from that API because the webpage goes blank.
    </div>
    <div className="videoc">
      <div className='bg-video'>
      <video loop autoPlay={true} onPlaying={true} className='vide'>
          <source src={ kulu }type="video/mp4"></source>
      </video>
      </div>
    </div>
  </div>
  )
}

export default video;