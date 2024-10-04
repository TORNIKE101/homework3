import React from 'react'
import "./Card.css"

export default function Card({model, desc, price, left, bg}) {
  return (
    <div className ='card' style={{background: bg}}>
        <h1 className='name'>model:{model}</h1>
        <p className='desc'>{desc}</p>
        <h1 className='price'>price:{price}</h1>
        <h1 className='left'>{left} left</h1>
    </div>
  )
}
