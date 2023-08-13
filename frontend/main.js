window.addEventListener("DOMContentLoaded", (event) => {
	getVisitorCount();
});

const fucntionApi = " ";

const getVisitorCount = () => {
	let count = 30;
	fetch(fucntionApi)
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			console.log("Website called function Api");
			count = response.count;
			document.getElementById("counter").innerText = count;
		})
		.catch(function (error) {
			console.log(error);
		});
	return count;
};
