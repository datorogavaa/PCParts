import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostsPage() {
    const posts = await prisma.post.findMany()
    return (
        <main>
            <h1>All Posts (0)</h1>
            <ul>{posts.map((post: any) => { return <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </main>
    )
}