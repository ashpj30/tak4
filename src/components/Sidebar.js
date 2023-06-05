import React from 'react'
import './Sidebar.css'
import udamy from './udamy.png'
import home1 from './home1.png'
import bank from './bank.png'
import teacher from './teacher.png'
import setting from './setting.png'
import chart from './chart.png'
import New from './New.png'
export const Sidebar = () => {
  return (
    <div>
        <div className='sbar'>
            < img className='sbari' src={udamy}></img>
<p>Udemy Inter. school</p>
<hr></hr>
 
 <div className='sbar1'>
    <ul>
        <li><img  src={home1}></img>&nbsp;&nbsp;Dashboard</li>
        <li> <img src={home1}></img>&nbsp;&nbsp;Teachers</li>
        <li style={{background:"#509CDB",width:"150px"}}><img src={teacher}></img>&nbsp;&nbsp;Students/ classes</li>
        <li><img src={bank}></img>&nbsp;&nbsp;Billing</li>
        <li><img src={setting}></img>&nbsp;&nbsp;Settings and profile</li>
        <li><img src={chart}></img>&nbsp;&nbsp;Exams</li>
    </ul>
    <p style={{marginRight:"12px",marginTop:"40px"}}><img src={bank}></img> &nbsp;&nbsp;Features&nbsp;&nbsp;<img src={New}></img></p></div>
 </div>
    </div>
  )
}
