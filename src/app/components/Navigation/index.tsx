'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './Navigation.module.css';
import {strings} from "@/app/page.strings";

export default function Navigation() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    {strings.navTitle}
                </div>
                <div className={styles.navLinks}>
                    <button
                        className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
                        onClick={() => router.push('/')}
                    >
                        {strings.navHome}
                    </button>
                    <button
                        className={`${styles.navLink} ${pathname === '/posts' ? styles.active : ''}`}
                        onClick={() => router.push('/posts')}
                    >
                        {strings.navBlogPosts}
                    </button>
                </div>
            </div>
        </nav>
    );
}
