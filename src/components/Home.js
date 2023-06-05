import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import './Home.css'
import belll from './belll.png'
import search3 from './search3.png'
import { data } from '../data'
import { Right } from './Right'
export const Home = () => {
  
  const [term,setTerm] = useState("");
  return (

    
    <div>
        <div>
            <Sidebar/>
        </div>
        <div className='home'>
<ul>
  <li><button className='but2' >Export CSV</button></li>
  <li><button className='but1'>Add Student</button></li>
  </ul>
  <p><img src={belll}></img> &nbsp;&nbsp;Log Out</p>
        </div>
        <div className='home1'>
          <select><option>Add filter</option></select>
        <p><img src={search3}></img>&nbsp;&nbsp;<input placeholder='Search for a student by name or email' 
       value={term} onChange={(e) => setTerm(e.target.value)}></input></p>
        </div>

        <div className='table'>
          <table>
            <thead>
            <th>Name</th>
            <th >Student ID</th>
            <th>Email address</th>
            <th>Class</th>
            <th>Gender</th></thead>
         
         <tbody > 

{
  data.filter((data)=>{
    return(data.name.indexOf(term)>=0 || data.Sid.indexOf(term)>=0 || data.email.indexOf(term)>=0 ||
     data.class.indexOf(term)>=0 || data.gender.indexOf(term)>=0)
  }).map((data)=>{
    return (
       <tr className='table1'>
       <td><img src={data.img}></img>{data.name}</td>
       <td>{data.Sid}</td>
       <td>{data.email}</td>
       <td>{data.class}</td>
       <td>{data.gender}</td>
      </tr>
    )
})
}
</tbody> 
   </table>
        </div>
        <div>
          <Right/>
        </div>
    </div>
  )
}
