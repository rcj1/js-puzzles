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
		let count = 1; //count the number of entries in a room
		let flat = array.flat();
		for (i = 0; i<flat.length; i++) {
			if (flat[i] === flat[i+1]) {
				count ++; //count up identical entries
			}	
			if ((flat[i] !== flat[i+1]) && (count !== 1)) { //if we've got identical entries => need a room
				let room = createRoom(flat[i], count); //create the room
				array.splice(array.indexOf(flat[i]), count, room); //and insert the room into original array
				count = 1;
			}
		}
		return array;
	}
	array.sort((a, b) => a-b); //sort the array in increasing order
	array = organize(array);
	return array;
}