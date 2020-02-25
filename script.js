const stateDiv = document.querySelector(".state");
const select = document.querySelector("select");
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
		let option = document.createElement("option");
		option.innerHTML = arr[i];
		option.value = arr[i];
		select.appendChild(option);
		stateDiv.appendChild(select);
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
