import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='log'>Logo</div>
      <div className='menu'>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar