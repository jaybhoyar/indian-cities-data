const stateDiv = document.querySelector(".state");

function state(data) {
	let arr = [];
	arr.push(data[0].State);

	cities = data;
	cities.filter(value => {
		if (!arr.includes(value.State)) {
			arr.push(value.State);
		}
	});
	arr = arr.sort();
	for (let i = 0; i < arr.length; i++) {
		let p = document.createElement("p");
		p.innerHTML = arr[i];
		stateDiv.appendChild(p);
	}
	console.log(arr.sort());
}
fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
	.then(response => {
		return response.json();
	})
	.then(jsonData => {
		state(jsonData);
	});
