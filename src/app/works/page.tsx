import { getData } from "@/libs/microcms";
import type { Works } from "@/libs/type";

import PostList from "../components/PostList";

export default async function StaticPage() {
    const { contents }: Works = await getData({endpoint: 'works'});

    if (!contents) {
        return <h1>No contents</h1>;
    }

    return (
        <>
            {/* @ts-ignore */}
            <PostList contents={ contents } />
        </>
    );
}