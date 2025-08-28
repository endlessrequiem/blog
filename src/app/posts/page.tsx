'use client';

import styles from "@/app/page.module.css";
import {strings} from "@/app/page.strings";
import Navigation from "@/app/components/Navigation";
import PostCard from "@/app/components/PostCard";
import { posts } from "@/app/data/posts";

export default function Posts() {
    return (
        <div className={styles.page}>
            <Navigation />
            <main className={styles.main}>
                <div className={styles.postsContainer}>
                    <div className={styles.postsList}>
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <div>{strings.footerText}</div>
            </footer>
        </div>
    );
}
