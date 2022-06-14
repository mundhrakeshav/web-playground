function x() {
	var i = 1;
	//Returns a closure
	setTimeout(() => {
		console.log("3 secs passed", i);
	}, 8000);
	console.log("Before 3 secs");
}

x();
