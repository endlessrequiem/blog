'use client';

import { useRouter } from 'next/navigation';
import { Post } from '@/app/data/posts';
import { formatDate } from '@/app/const/date';
import styles from './PostCard.module.css';

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    const router = useRouter();

    return (
        <article className={styles.postCard}>
            <div className={styles.postHeader}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <div className={styles.postMeta}>
                    <span className={styles.postDate}>{formatDate(post.date)}</span>
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
    );
}
