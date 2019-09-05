import * as React from 'react';
// import {useState, useEffect, useRef} from 'react';

import './CountUp.scss';

import {getModifiers} from 'components/libs';

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

/*
function getValEaseOut(t, b, c, d) {
	t /= d;
	return -c * t * (t - 2) + b;
}
*/

type CountUpProps = {
	from: number;
	to: number;
};

/*
function useInterval(callback: Function, delay: number | null) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		if (savedCallback) {
			savedCallback.current = callback;
		}
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			if (savedCallback) {
				savedCallback.current();
			}
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}
*/
export const CountUp = (props: CountUpProps) => {
	const {from} = props;

	// const delay: number = 40;

	const count = from;
	//const [count, setCount] = useState(from);

	/*
	const [isRunning, setIsRunning] = useState(false);

	useInterval(
		() => {
			setCount(count + 1);
		},
		isRunning ? delay : null
	);
	*/

	const base: string = 'countup';

	const atts: object = {
		className: getModifiers(base, {}),
	};

	return <span {...atts}>{String(count)}</span>;
};
