import "server-only";

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

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
	throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
	throw new Error("MICROCMS_API_KEY is required");
}

const url = `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/`

export const getData = async (props: string) => {
	const endpoint = props
	const fetchUrl = url + endpoint
	const res = await fetch(fetchUrl ,{
		headers: {
			"X-MICROCMS-API-KEY": `${process.env.MICROCMS_API_KEY}`
		}
	})
	return res.json();
}