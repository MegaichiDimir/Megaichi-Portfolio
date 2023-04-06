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

