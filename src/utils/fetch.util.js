const fetch = require('node-fetch');

async function createFetch(url, headers, method, body) {
	const opts = { method: method.toLowerCase(), headers };
	if (opts.method === 'post' || opts.method === 'put' || opts.method === 'delete') opts.body = body;
	const response = await fetch(url, opts);
	return response.json();

}

module.exports = {
	createFech: createFetch
};