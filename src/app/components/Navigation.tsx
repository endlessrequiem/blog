'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    Austin's Blog
                </div>
                <div className={styles.navLinks}>
                    <button 
                        className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
                        onClick={() => router.push('/')}
                    >
                        Home
                    </button>
                    <button 
                        className={`${styles.navLink} ${pathname === '/posts' ? styles.active : ''}`}
                        onClick={() => router.push('/posts')}
                    >
                        Blog Posts
                    </button>
                </div>
            </div>
        </nav>
    );
}
