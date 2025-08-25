'use client';

import styles from "@/app/page.module.css";
import {strings} from "@/app/page.strings";
import Navigation from "@/app/components/Navigation";
import { posts } from "@/app/data/posts";
import { useRouter } from "next/navigation";

export default function Posts() {
    const router = useRouter();

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className={styles.page}>
            <Navigation />
            <main className={styles.main}>
                <div className={styles.postsContainer}>
                    <div className={styles.postsList}>
                        {posts.map((post) => (
                            <article key={post.id} className={styles.postCard}>
                                <div className={styles.postHeader}>
                                    <h2 className={styles.postTitle}>{post.title}</h2>
                                    <div className={styles.postMeta}>
                                        <span className={styles.postDate}>{formatDate(post.date)}</span>
                                        <span className={styles.postAuthor}>by {post.author}</span>
                                    </div>
                                </div>
                                <p className={styles.postExcerpt}>{post.excerpt}</p>
                                <button 
                                    className={styles.readMoreButton}
                                    onClick={() => router.push(`/posts/${post.id}`)}
                                >
                                    Read More
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <footer className={styles.footer} style={{paddingTop: 12}}>
                <div>My {strings.blog}</div>
            </footer>
        </div>
    );
}
