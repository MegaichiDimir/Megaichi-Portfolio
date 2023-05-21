import "server-only";

export const zennUrl = "https://zenn.dev/"

export const getZennArticles = async () => {
	const res = await fetch(`${zennUrl}api/articles?username=megaichi&order=latest`)
	return res.json();
}