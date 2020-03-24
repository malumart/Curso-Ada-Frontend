const apiKey = "q3EKODXLNgyAT5kZ63GxBc3srj0F1HHPbKtSNJI6xIhKXnG7fv";
const secret = "vG9NpxVGdPmcfnhLct4O6LCmHdRjk1LcK0aFLyF3";

fetch("https://api.petfinder.com/v2/oauth2/token", {
	method: "POST",
	body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`,
	headers: { "Content-Type": "application/x-www-form-urlencoded" }
})
	.then(resp => resp.json())
	.then(token => {
		fetch("https://api.petfinder.com/v2/animals", {
			headers: {
				Authorization: token.token_type + " " + token.access_token,
				"Content-Type": "application/x-www-form-url-encoded"
			}
		})
			.then(data => data.json())
			.then(animals => console.log(animals));
	});
