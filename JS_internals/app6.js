// function x() {
//     for (let index = 0; index < 5; index++) {
//         setTimeout(() => {
//             console.log(index);
//         }, index * 1000);

//     }
// }

// function x() {
//     // logs 6 6 6 6 6
//     for (var index = 0; index <=  5; index++) {
//         setTimeout(() => {
//             console.log(index);
//         }, index * 1000);

//     }
// }
function x() {
	for (let index = 0; index < 6; index++) {
		function close(index) {
			setTimeout(() => {
				console.log(index);
			}, index * 1000);
		}
		close(index);
	}
}
x();
