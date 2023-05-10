import React from "react";
import heroImage from '../../assets/images/hero.png';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header className={ styles.hero }>
            <img className={ styles['hero-image'] } src={ heroImage } alt="hero"/>
            <div className="container">
              <div className={styles['main-header']}>
                <h1 className={styles['main-title']}>creative scroll</h1>
              </div>
            </div>
        </header>
    );
};

export default Hero;