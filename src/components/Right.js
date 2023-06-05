import React from 'react'
import './Right.css'
import img from './img.png'
import img1 from './img1.png'
import one from './one.png'
import two from './two.png'
import three from './three.png'
import four from './four1.png'
import five from './five.png'

export const Right = () => {
  return (
    <div>
        <div className='right'>
            <p>547030</p>
            <img src={img}></img>
            <div className='right1'>
          <p>Cody Fisher</p>
          <span>Science student</span>
          <img src={img1}></img>
          <h6>About</h6>
          </div>
        </div>
        <div className='ri'>
<p>Age</p>
<span>Gender</span>
<h5>17</h5>
<h6>Female</h6></div>
<div className='ri2'>
    <p>People from the same class</p>
    <img className='one' src={one}></img>
    <img className='two' src={two}></img>
    <img className='three' src={three}></img>
    <img className='four' src={four}></img>
    <img className='five' src={five}></img>
    <span>+12 more</span>
</div>
        
    </div>
  )
}
