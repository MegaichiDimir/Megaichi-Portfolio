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
			title: string,
			contents: string,
			thumbnail: {
				url: string,
				height: number,
				width: number,
			},
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

export const getSkill = async () => {
	const endpoint = 'skill';
	const fetchUrl = url + endpoint;
	const res = await fetch(fetchUrl,{
		headers: {
			"X-MICROCMS-API-KEY": `${process.env.MICROCMS_API_KEY}`
		} 
	})
	.then(r => r.json())
	.then((data) => {
		// console.log(data)
		return data
	});
	// console.log(res);
	return res as Promise<Skill>;
}

export const getWorks = async () => {
	const endpoint = 'works'
	const fetchUrl = url + endpoint
	const res = await fetch(fetchUrl,{
		headers: {
			"X-MICROCMS-API-KEY": `${process.env.MICROCMS_API_KEY}`
		}
	})
	.then(r => r.json())
	.then((data) => {
		return data
	});
	return res as Promise<Works>;
}