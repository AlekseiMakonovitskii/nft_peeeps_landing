import React from 'react'
import styles from '../scss/Title.module.scss';

const Title = ({h1 = false, }) => {
	return (
		<div>
			{h1 && <h1></h1>}
			{!h1 && <h2></h2>}
		</div>
	)
}

export default Title