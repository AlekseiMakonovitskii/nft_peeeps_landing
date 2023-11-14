import React from 'react'
import styles from '../scss/SectionTitle.module.scss';

const SectionTitle = ({img, text}) => {
	return (
		<div className={styles.sectionTitle}>
			<img src={img} alt={text} className={styles.sectionBubble} />
			<h3>{text}</h3>
		</div>
	)
}

export default SectionTitle