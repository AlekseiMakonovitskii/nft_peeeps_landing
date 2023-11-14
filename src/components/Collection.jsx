import React from 'react'
import styles from '../scss/Collection.module.scss'
import SectionTitle from './SectionTitle'
import titleBubble from '../assets/titleBubble.svg';

const Collection = () => {
	return (
		<section className={styles.collection}>
			<SectionTitle img={titleBubble} text={'Collection'}/>
		</section>
	)
}

export default Collection