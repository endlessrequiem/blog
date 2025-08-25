import styles from "@/app/page.module.css";
import {strings} from "@/app/page.strings";


export default function Introduction() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <article className={styles.postContainer}>
                    <header className={styles.postHeader}>
                        <h1 className={styles.postTitle} style={{marginBottom: 24}}>{strings.welcome}</h1>
                        <div className={styles.postContent}>
                            {strings.welcomeText}
                        </div>
                    </header>
                </article>
            </main>
        </div>
    );
}
