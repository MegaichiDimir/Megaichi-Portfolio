import "server-only";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
	throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
	throw new Error("MICROCMS_API_KEY is required");
}

const url = `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/`

export const getData = async (props: {endpoint :string, queries?: string}) => {
	const endpoint = props.endpoint;
	const queries = props.queries ? props.queries : "";
	const fetchUrl = url + endpoint + queries
	const res = await fetch(fetchUrl ,{
		headers: { "X-MICROCMS-API-KEY": `${process.env.MICROCMS_API_KEY}` }
	})
	return res.json();
}