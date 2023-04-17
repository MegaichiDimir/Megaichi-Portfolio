import PostList from "@/components/works/PostList";


export const metadata = {
    title: 'Works',
}

// 記事一覧ページ
export default function StaticPage() {

    return (
        <>
            <div className="relative bottom-14 min-h-screen bg-sky-100">
                <div className="pt-12">
                    {/* @ts-ignore */}
                    <PostList />
                </div>
            </div>
        </>
    );
}