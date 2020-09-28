import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ste Everingon's Pro Skater</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video className={styles.video} loop muted autoPlay='autoplay'>
        <source src="ste.mp4" type="video/mp4" />
      </video>

      <iframe width="1280" height="720" src="https://youtu.be/7kecW5p0b5I?t=37" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

      <main className={styles.main}>
        <div className={styles.content}>
          <img className={styles.logo} src='logo.png' />
          <div className={styles.title}>SPEED RUN COMPETITION WINNER</div>
          <div className={styles.name}>steeverington</div>
          <div className={styles.title}>WINNING TIME</div>
          <div>79.067s</div>
        </div>
        {/* <div>
          <img src='http://placehold.it/400x400' />
        </div> */}
      </main>
    </div>
  )
}
