import React from 'react'


function ServiceCard({image,heading,content}) {
  return (
    
<div class="card wallet border border-slate-300">
    <h1 className=' heading font-bold'>{heading}</h1>
    <div class="overlay"></div>
    


       <img src={image} alt="websitw" />

  
    <p>{content}</p>
</div>
  )
}

export default ServiceCard