import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { DEVICE } from '../../constants/Breakpoints';
import { MdAdd } from 'react-icons/md';

export const Wrapper = styled.div`
	margin-bottom: 0.5rem;
	background: #fff;
	/* box-shadow: 0px 6px 10px #dfe4eb;
	border-radius: 4px; */
	overflow: hidden;

	&:last-child {
		margin-bottom: unset;
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0.5rem;
	cursor: pointer;

	h4 {
		margin: 0;
	}
`;

// export const Arrow = styled.img`
// 	transition: 0.3s;

// 	${({ active }) =>
// 		active &&
// 		`
//     transform: rotate(180deg);
//   `}
// `;

export const Arrow = styled(MdAdd)`
	transition: 0.3s;

	${({ active }) =>
		active &&
		`
    transform: rotate(135deg);
  `}
`;

export const Details = styled.div`
	max-height: 0;
	transition-duration: 0.5s;
	overflow: hidden;
	text-align: left;

	p {
		padding: 0.5rem 1.5rem;
		color: #777777;
		line-height: 1.8;
	}

	${({ active }) =>
		active &&
		`
    max-height: 450px;
  `}
`