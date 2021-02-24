import Head from 'next/head'
import { Cauntdown } from '../components/cauntdown'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Moviet</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Cauntdown />
        </div>

        <div>

        </div>
      </section>
    </div>
  )
}
