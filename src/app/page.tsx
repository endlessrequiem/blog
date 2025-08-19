'use client';

import styles from "./page.module.css";
import {strings} from "./page.strings";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div>Hi this is some text</div>
                <button onClick={() => {
                    router.push("/posts");
                }}>
                    Go to Post
                </button>
            </main>
            <footer className={styles.footer} style={{paddingTop: 12}}>
                <div>My {strings.blog}</div>
            </footer>
        </div>
    );
}
