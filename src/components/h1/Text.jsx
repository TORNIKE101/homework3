import React from 'react'
import './Text.css'

export default function Text({h1, color, fs, ta}) {
  return (
    <div className='text' style={{color, fontSize: fs, textAlign: ta}}>
        <h1>{h1}</h1>
    </div>
  )
}
