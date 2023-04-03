import { getData } from "@/libs/microcms";
import type { Works } from "@/libs/type";

import PostList from "../components/PostList";

export const metadata = {
    title: 'Works',
}

// 記事一覧ページ
export default async function StaticPage() {
    const { contents }: Works = await getData({endpoint: 'works'});

    if (!contents) {
        return <h1>No contents</h1>;
    }

    return (
        <>
            <div className="relative bottom-14 min-h-screen bg-sky-100">
                <div className="pt-12">
                    <PostList contents={ contents } />
                </div>
            </div>
        </>
    );
}