import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
        <span>0xp</span>
        <div>
          <div style={{width:'50%'}}></div>

          <span className={styles.courrentExperience} style={{left: '50%'}}>
            300px
          </span>
        </div>
        <span>600</span>
    </header>
  )
}