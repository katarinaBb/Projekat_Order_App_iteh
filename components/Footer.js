// next imports
import Image from 'next/image';

// utils
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/footer.jpg' alt='footer-bg' layout='fill' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>ORDER WELL BAKED SLICE OF PIZZA.</h2>
          <h3 className={styles.motto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Tršćanska 4
            <br /> Beograd, 11000
            <br /> (+381) 69-440-5440
          </p>
          <p className={styles.text}>
            Zaplanjska 43
            <br /> Beograd, 11000
            <br /> (+381) 69-440-5440
          </p>
          <p className={styles.text}>
            Braće Jovandić 1
            <br /> Novi Sad, 21000
            <br /> (+381) 69-440-5441
          </p>
          <p className={styles.text}>
            Vojvođanska 24
            <br /> Novi Sad, 21000
            <br /> (+381) 69-440-5441
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
