import React from 'react'

function HeadingGlow({currentImageIndex}) {

    const textColors = [
        "text-white",
        "text-yellow-500",
        
        "text-blue-500",
      ];



  return (
    <div >
     
<button className="button" data-text="Awesome">
    <span className={`actual-text ${textColors[currentImageIndex]}`}>&nbsp;Welcome to Glocare Assist&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Welcome to Glocare Assist&nbsp;</span>
</button>
    </div>
  )
}

export default HeadingGlow