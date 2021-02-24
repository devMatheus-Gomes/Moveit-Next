import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/64808612?s=460&u=9da3c03980e201244dc88e01af3088e088936a1d&v=4" alt="Matheus Gomes" />
      <div>
        <strong>Matheus Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  )
}