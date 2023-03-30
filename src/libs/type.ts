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
			links: {
				url: string,
				github: string,
				preview: string,
			}
		}
	]
}