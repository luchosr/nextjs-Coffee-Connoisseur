import styles from '../styles/banner.module.css';

const Banner = () => {
  return (
    <div className={styles.container}>
      Banner
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button className={styles.button}>View stores nearby</button>
    </div>
  );
};

export default Banner;
