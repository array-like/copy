import test from 'ava';

import {randint} from '@randomized/random';

import {copy} from '#module';

function one(Constructor) {
	test(`copy (${Constructor})`, (t) => {
		const n = 100;
		const ai = 23;
		const aj = 73;
		const bi = 49;

		const a = new Constructor(n);
		const b = new Constructor(n);

		const resetb = () => {
			for (let i = 0; i < n; ++i) {
				b[i] = 0;
			}
		};

		for (let i = 0; i < n; ++i) {
			a[i] = randint(1, 2 ** 31);
		}

		resetb();

		for (let i = 0; i < n; ++i) {
			t.is(b[i], 0, `b[${i}] === 0`);
		}

		copy(a, 0, n, b, 0);

		for (let i = 0; i < n; ++i) {
			t.deepEqual(b[i], a[i], `b[${i}] === a[${i}]`);
		}

		resetb();

		copy(a, ai, aj, b, bi);

		for (let i = 0; i < n; ++i) {
			if (i < bi || i >= bi + aj - ai) {
				t.is(b[i], 0, `b[${i}] === 0`);
			} else {
				const j = i - bi + ai;
				t.deepEqual(b[i], a[j], `b[${i}] === a[${j}]`);
			}
		}
	});
}

const arrays = [
	Array,
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8Array,
	Uint16Array,
	Uint32Array,
	Uint8ClampedArray,
	Float32Array,
	Float64Array,
];

for (const Constructor of arrays) {
	one(Constructor);
}
