// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
	//Object to hold each letter as a property and the number of times
	//it is repeated as the value
	let storage = {};

	// Convert the input string to all lowercase and an array
	text = text.toLowerCase().split('');

	// If text contains nothing return 0
	if (!text.length) return 0;

	// Iterate over each item in the string
	// Check to see if storage has that item as a property
	// 	True : Add 1 to the value
	// 	False: set value = 1
	text.forEach(letter => {
		storage[letter] ? storage[letter]++ : storage[letter] = 1;
	})

	// Holder for how many of the letters are duplicates
	let duplicate = 0;

	// Iterate through the storage object
	// Check if the value of each property is greater than 1
	// 		True : Increment duplicate;
	// 		False: Do nothing
	for (let key in storage) {
		if (storage[key] > 1) duplicate++;
	}

	// Return the duplicate
	return duplicate;
}
