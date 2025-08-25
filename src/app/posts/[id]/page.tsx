'use client';

import { notFound } from 'next/navigation';
import styles from "@/app/page.module.css";
import {strings} from "@/app/page.strings";
import Navigation from "@/app/components/Navigation";
import { posts } from "@/app/data/posts";

interface PostPageProps {
    params: {
        id: string;
    };
}

export default function PostPage({ params }: PostPageProps) {
    const post = posts.find(p => p.id === params.id);

    if (!post) {
        notFound();
    }

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
                <article className={styles.postContainer}>
                    <header className={styles.postHeader}>
                        <h1 className={styles.postTitle}>{post.title}</h1>
                        <div className={styles.postMeta}>
                            <span className={styles.postDate}>{formatDate(post.date)}</span>
                            <span className={styles.postAuthor}>by {post.author}</span>
                        </div>
                    </header>
                    <div className={styles.postContent}>
                        {post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className={styles.postParagraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className={styles.postFooter}>
                        <button 
                            className={styles.backButton}
                            onClick={() => window.history.back()}
                        >
                            ← Back to Posts
                        </button>
                    </div>
                </article>
            </main>
            <footer className={styles.footer} style={{paddingTop: 12}}>
                <div>My {strings.blog}</div>
            </footer>
        </div>
    );
}
