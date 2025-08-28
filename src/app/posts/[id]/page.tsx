'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import styles from "@/app/page.module.css";
import {strings} from "@/app/page.strings";
import Navigation from "@/app/components/Navigation";
import { posts } from "@/app/data/posts";
import {formatDate} from "@/app/const/date";

interface PostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function PostPage({ params }: PostPageProps) {
    const { id } = React.use(params);
    const post = posts.find(p => p.id === id);

    if (!post) {
        notFound();
    }

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
            <footer className={styles.footer}>
                <div>{strings.footerText}</div>
            </footer>
        </div>
    );
}
