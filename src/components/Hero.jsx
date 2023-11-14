import React from 'react';
import styles from '../scss/Hero.module.scss';
import oldMan from '../assets/oldMan.svg';
import woman from '../assets/woman.svg';
import lightCircle from '../assets/lightCircle.svg';
import pinkCircle from '../assets/pinkCircle.svg';
import bubbles from '../assets/bubbles.svg';
import bubbles2 from '../assets/bubbles2.svg';
import titleBubble from '../assets/titleBubble.svg';
import SectionTitle from './SectionTitle';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <SectionTitle img={titleBubble} text={'NFT Collection'}/>
  
        <div className={styles.mainTitle}>
          <h1>
            Bored <span>NFT Peeps</span>
          </h1>
  
        </div>
      </div>




      <div className={styles.randomBubbles}>

      </div>
    </section>
  );
};

export default Hero;
