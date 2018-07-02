function myFunc(){
	setTimeout(() => {
		fetch("https://api.tenor.com/v1/search")
		.then(data => {
			return data.json();
		}).then(data => {
			var randomNum = Math.floor(Math.random() * 10);
			console.log(randomNum);
			var image = document.createElement("IMG");
			image.setAttribute("src", data.results[0].media[randomNum].nanomp4.url);
			image.setAttribute("width", "150");
			image.setAttribute("height", "228");
			image.setAttribute("alt", "The Pulpit Rock");
			document.body.appendChild(image);
			console.log(data.results[0].url);
		}).catch((err) => {
			console.log(err);
		});
	}, 1500);
}