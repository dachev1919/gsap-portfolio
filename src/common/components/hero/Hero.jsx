import heroImage from '../../assets/images/hero.png';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header className={`${styles.hero} hero-section`}>
            <img data-speed='.6' className={`${styles['hero__image']} portfolio__will-change`} src={ heroImage } alt="hero"/>
            <div className="container">
              <div data-speed='.8' className={`${styles['main__header']} portfolio__will-change`}>
                <h1 data-lag='.5' className={`${styles['main__title']} portfolio__will-change`}>creative scroll</h1>
              </div>
            </div>
        </header>
    );
};

export default Hero;