import React from 'react';
import styles from '../scss/Hero.module.scss';
import oldMan from '../assets/oldMan.svg';
import woman from '../assets/woman.svg';
import lightCircle from '../assets/lightCircle.svg';
import pinkCircle from '../assets/pinkCircle.svg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h3>NFT Collection</h3>
        <h1>
          Bored <span>NFT Peeps</span>
        </h1>
      </div>
      <div className={styles.images}>
        <div className={styles.imageContainer}>
          <img src={oldMan} alt="" className={styles.oldMan} />
          <img src={lightCircle} alt="" className={styles.lightCircle} />
        </div>
        <div className={styles.imageContainer}>
          <img src={woman} alt="" className={styles.woman} />
          <img src={pinkCircle} alt="" className={styles.pinkCircle} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
