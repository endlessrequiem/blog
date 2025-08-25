'use client';

import styles from "./page.module.css";
import {strings} from "./page.strings";
import Navigation from "./components/Navigation/Navigation";
import Introduction from "@/app/components/Introduction";

export default function Home() {
    return (
        <div className={styles.page}>
            <Navigation />
            <main className={styles.main}>
                <Introduction />
            </main>
            <footer className={styles.footer}>
                <div>{strings.footerText}</div>
            </footer>
        </div>
    );
}
