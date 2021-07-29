/**
 * Copy.
 *
 * @param {ArrayLike} a
 * @param {number} ai
 * @param {number} aj
 * @param {{[x: number]: any}} b
 * @param {number} bi
 */
const copy = (a, ai, aj, b, bi) => {
	for (; ai < aj; ++ai, ++bi) {
		b[bi] = a[ai];
	}
};

export default copy;
