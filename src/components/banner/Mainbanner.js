"use client";
import React from 'react'

export default function Mainbanner() {
  return (
    <section className='mainbanner px-12'>
      <div className='mid grid grid-cols-2'>
        <div className='bl'>
          {/* <h1><span>energizing</span><br/> a sustainable future</h1> */}
         <h1><span>technology</span><br/>  a sustainable future</h1> 
        </div>
        <div className='br p1'>
          <p>Wind Power is a global investment<br/>
company with a focus on energy<br/>
transition and EGS related initiatives.</p>
        </div>
      </div>
    </section>
  )
}
