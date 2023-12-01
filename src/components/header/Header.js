"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Header() {
  return (
    <div className='header px-12 py-5'>
        <div className=' grid grid-cols-2'>
            <div className='logo flex items-end'>
          
              <Image alt='logo' width={200} height={45} src={'/logo.png'}/>
              
            </div>
            <div className='mwrap'>
              <ul className='menu-list'>
               
              <li><Link href={'/'}>home</Link></li>
                <li><Link href={'/'}>about us</Link></li>
                <li><Link href={'/'}>services</Link></li>
                <li><Link href={'/'}>staff augmentation</Link></li>
                <li><Link href={'/'}>our expertise</Link></li>
                <li><Link href={'/'}>contact us</Link></li>
              </ul>
            </div>
        </div>
    </div>
  )
}
