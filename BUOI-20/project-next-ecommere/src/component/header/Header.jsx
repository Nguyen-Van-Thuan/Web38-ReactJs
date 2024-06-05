import Link from 'next/link'
import React from 'react'
import styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header