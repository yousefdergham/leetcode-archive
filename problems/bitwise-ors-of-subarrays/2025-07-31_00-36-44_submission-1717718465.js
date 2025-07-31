/**
 * @param {number[]} arr
 * @return {number}
 */
const subarrayBitwiseORs = arr => {
	const bits = [];
	let L = 0;

	for (let i = 0; i < arr.length; i++) {
		const R = bits.length;
		bits.push(arr[i]); 

		while (L < R) {
			const prev = bits[bits.length - 1];
			const bitwise = bits[L] | prev; 

			if (bitwise !== prev) bits.push(bitwise);

			L++;
		}
	}

	return new Set(bits).size; 
};