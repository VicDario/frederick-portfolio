import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '@styles/Home.module.scss';

import alert from '@public/assets/svg/alert.svg';
import instagram from '@public/assets/svg/instagram.svg';
import linkedin from '@public/assets/svg/linkedin.svg';
import behance from '@public/assets/svg/behance.svg';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

     <main className={styles.main}>
        <div className={styles['alert-container']}>
          <Image src={alert} alt="Alert" />
        </div>
        <h2>Under construction</h2>
        <p className={styles.text}>
          My website is under construction,<br />
          But I&apos;m ready to start!<br />
          Contact me!<br />
        </p>
        <a className={styles.button} href="mailto:soyfdr@gmail.com">SEND EMAIL</a>
        <div className={styles['social-media']}>
          <p>Follow</p>
          <div className={styles.icons}>
            <a href="https://www.behance.net/soyfdr" target="_blank" rel="noreferrer">
              <Image src={behance} alt="Behance" />
            </a>
            <a href="https://www.linkedin.com/in/frederick-velasco-1392b5180/" target="_blank" rel="noreferrer">
              <Image src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/soyfdr/" target="_blank" rel="noreferrer">
              <Image src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;