import styles from "@/app/page.module.css";
import {strings} from "@/app/page.strings";

export default function Post() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div>Hi this is a post</div>
            </main>
            <footer className={styles.footer} style={{paddingTop: 12}}>
                <div>My {strings.blog}</div>
            </footer>
        </div>
    );
}
