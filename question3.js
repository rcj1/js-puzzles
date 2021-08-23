//hex <=> RGB converter
//hex to rgb
const hexToRgb = (hex) => {
	let arr = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4)]; //get the two-digit chunks corresponding to rg&b
	let dec = arr.map(str => parseInt(str, 16)); //convert to base 10
	let str = `rgb(${dec[0]}, ${dec[1]}, ${dec[2]})`; //format into rgb
	return str;
}

//rgb to hex
const RgbToHex = (red, green, blue) => {
	const converter = (int) => {
		const matches = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
		return matches[int]; //matches hex ints to string equivalents
	}

	let arr = [red, green, blue];
	let rgb = arr.map(el => {
		let char1 = converter(el % 16); //for each color, find the two corresponding hex ints 
		let char2 = converter(Math.floor(el/16));
		return char2 + char1; //turn them into strings and concatenate them
	});
	return '#' + rgb.join("");
}