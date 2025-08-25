'use client';

import styles from "./page.module.css";
import {strings} from "./page.strings";
import Navigation from "./components/Navigation";

export default function Home() {
    return (
        <div className={styles.page}>
            <Navigation />
            <main className={styles.main}>
                <div>Hi this is some text</div>
            </main>
            <footer className={styles.footer} style={{paddingTop: 12}}>
                <div>My {strings.blog}</div>
            </footer>
        </div>
    );
}
