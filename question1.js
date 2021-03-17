// Room cleaning function
const cleanRoom = (array) => {
	//first, two helper functions
	const createRoom = (val, count) => {
		let room = [];
		for (var i = 0; i < count; i++) {
			room.push(val);
		}
		return room;
	}
	const organize = (array) => {
		let count = 1;
		let flat = array.flat();
		for (i = 0; i<flat.length; i++) {
			if (flat[i] === flat[i+1]) {
				count ++;
			}	
			if ((flat[i] !== flat[i+1]) && (count !== 1)) {
				let room = createRoom(flat[i], count);
				array.splice(array.indexOf(flat[i]), count, room);
				count = 1;
			}
		}
		return array;
	}
	array.sort((a, b) => a-b);
	array = organize(array);
	return array;
}