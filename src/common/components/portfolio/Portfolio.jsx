import styles from './Portfolio.module.css';
import work1 from '../../assets/images/work/1.jpg';
import work2 from '../../assets/images/work/2.jpg';
import work3 from '../../assets/images/work/3.jpg';
import work4 from '../../assets/images/work/4.jpg';
import work5 from '../../assets/images/work/5.jpg';
import work6 from '../../assets/images/work/6.jpg';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className="container">
        <div className={styles['portfolio__gallery']}>
          <div data-speed='.8' className={`${styles['portfolio__gallery-left']} portfolio__will-change portfolio__gallery-left`}>
            <img className={`${styles['portfolio__gallery-item']} portfolio__gallery-item`} src={work1} alt="work-1"/>
            <img className={`${styles['portfolio__gallery-item']} portfolio__gallery-item`} src={work2} alt="work-2"/>

            <div className={`${styles['portfolio__text-block']} ${styles['portfolio__gallery-item']} portfolio__gallery-item`}>
              <h2 className={styles['portfolio__text-block_h']}>Creative floating scroll with amazing parallax effect</h2>
              <p className={styles['portfolio__text-block_p']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis laudantium obcaecati pariatur quidem suscipit.</p>
            </div>

            <img className={`${styles['portfolio__gallery-item']} portfolio__gallery-item`} src={work6} alt="work-6"/>
          </div>

          <div data-speed='1.1' className={`${styles['portfolio__gallery-right']} portfolio__will-change portfolio__gallery-right`}>
            <img className={styles['portfolio__gallery-item']} src={work3} alt="work-3"/>

            <div className={`${styles['portfolio__text-block']} ${styles['portfolio__gallery-item']}`}>
              <h2 className={styles['portfolio__text-block_h']}>Creative floating scroll with amazing parallax effect</h2>
              <p className={styles['portfolio__text-block_p']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis laudantium obcaecati pariatur quidem suscipit.</p>
            </div>

            <img className={styles['portfolio__gallery-item']} src={work4} alt="work-4"/>
            <img className={styles['portfolio__gallery-item']} src={work5} alt="work-5"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;