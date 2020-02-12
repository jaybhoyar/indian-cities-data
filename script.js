const stateDiv = document.querySelector(".state");

function state(data) {
	let arr = [];
	arr.push(data[0].State);

	cities = data;
	var state = cities.filter(value => {
		if (!arr.includes(value.State)) {
			arr.push(value.State);
		}
	});
	stateDiv.innerHTML = arr.sort();
	console.log(arr.sort());
}
fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
	.then(response => {
		return response.json();
	})
	.then(jsonData => {
		state(jsonData);
	});
