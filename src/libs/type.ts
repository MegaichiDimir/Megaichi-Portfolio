export type Profile = {
	image: {
		url: string,
		height: number,
		width: number,
	},
	name: string,
	contents: string,
}

export type Skill = {
	contents: [
		{
			id: string,
			title: string,
			image: {
				url: string,
				height: number,
				width: number,
			},
			description: string
		}
	]
}

export type Works = {
	contents: [
		{
			id: string,
			slug: string,
			title: string,
			thumbnail: {
				url: string,
				height: number,
				width: number,
			},
			description: string,
			contents: string,
			sidebar: string,
			links: {
				url: string | undefined,
				github: string | undefined,
				preview: string | undefined,
				preview_desc: string | undefined,
			} | undefined
		}
	]
}

export type Zenn = {
	articles: [
		{
			id: number,
			post_type: string,
			title: string,
			slug: string,
			comments_count: number,
			liked_count: number,
			body_letters_count: number,
			article_type: string,
			emoji: string,
			is_suspending_private: boolean,
			published_at: string,
			body_updated_at: string,
			source_repo_updated_at: string,
			path: string,
			user: {
				id: number,
				username: string,
				name: string,
				avatar_small_url: string,
			},
			publication: null
		}
	],
	next_page: null
}