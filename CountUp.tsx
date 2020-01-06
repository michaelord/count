import {getModifiers} from 'components/libs';
import * as Types from 'components/types';
import React, {useState, useEffect} from 'react';
import './CountUp.scss';

type CountUpProps = {
	from: Types.Number;
	to: Types.Number;
};

export const CountUp = (props: CountUpProps) => {
	const {from, to} = props;

	const base: string = 'countup';

	const [value, setValue] = useState(String(to));

	const atts: object = {
		className: getModifiers(base, {}),
	};

	return <span {...atts}>{value}</span>;
};
