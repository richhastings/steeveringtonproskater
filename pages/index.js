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

      <iframe style={{'display': 'none'}} src="ste.mp3" allow='autoplay' />

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
