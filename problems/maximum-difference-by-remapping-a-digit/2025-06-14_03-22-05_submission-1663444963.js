/**
 * @param {number} num
 * @return {number}
 */
minMaxDifference = n => (n += '').replaceAll(n[n.search(/[^9]/)], 9) - n.replaceAll(n[0], 0)