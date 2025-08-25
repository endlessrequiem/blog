export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
}

export const posts: Post[] = [
    {
        id: "getting-started-with-web-development",
        title: "Getting Started with Web Development",
        excerpt: "A comprehensive guide for beginners who want to dive into the world of web development and learn the fundamentals.",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        date: "2024-01-15",
        author: "Austin"
    },
    {
        id: "the-future-of-artificial-intelligence",
        title: "The Future of Artificial Intelligence",
        excerpt: "Exploring the latest trends and developments in AI technology and what the future holds for this rapidly evolving field.",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
        date: "2024-01-10",
        author: "Austin"
    },
    {
        id: "mastering-react-hooks",
        title: "Mastering React Hooks",
        excerpt: "Deep dive into React Hooks, exploring useState, useEffect, and custom hooks to build better React applications.",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.

Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.

Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`,
        date: "2024-01-05",
        author: "Austin"
    },
    {
        id: "css-grid-vs-flexbox",
        title: "CSS Grid vs Flexbox: When to Use What",
        excerpt: "A detailed comparison of CSS Grid and Flexbox, helping you choose the right layout method for your projects.",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.

Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.

Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.`,
        date: "2024-01-01",
        author: "Austin"
    },
    {
        id: "typescript-best-practices",
        title: "TypeScript Best Practices for 2024",
        excerpt: "Essential TypeScript patterns and practices that will help you write more maintainable and robust code.",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.

Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.`,
        date: "2023-12-28",
        author: "Austin"
    }
];
