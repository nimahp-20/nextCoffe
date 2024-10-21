import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {


    return (
        <nav className={styles.navbar}>
            <main>
                <div>
                    <Link href={'/'}>
                        <img src='/images/logo.png' alt='logo' />
                    </Link>
                </div>
                <ul className={styles.links}>
                   
                        <li>
                            <Link href="/">صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link href="/category">فروشگاه</Link>
                        </li>
                        <li>
                            <Link href="/blog">وبلاگ</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">تماس با ما</Link>
                        </li>
                        <li>
                            <Link href="/about-us">درباره ما</Link>
                        </li>
                        <li>
                            <Link href="/rules">قوانین</Link>
                        </li>
                    
                </ul>
                <div className={styles.navbar_icons}>

                </div>
            </main>
        </nav>
    )
}

export default Navbar