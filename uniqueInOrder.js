//http://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

const uniqueInOrder = function (iterable) {
	let input = typeof iterable === 'string'
		? iterable.split('')
		: iterable

	let storage = [];

	input.reduce((prev, curr) => {
		curr !== prev ? storage.push(curr) : null
		return curr 
	}, null);

	return storage;	
}

uniqueInOrder('AAAABBBCCDAABBB');
uniqueInOrder('ABBCcAD');
uniqueInOrder([1,2,3,4,5,6,7]);
