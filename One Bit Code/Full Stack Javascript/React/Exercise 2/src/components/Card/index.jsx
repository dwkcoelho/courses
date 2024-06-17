import posterImg from "../../assets/poster.jpg"
import styles from "./styles.module.css"

export default function Card() {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={posterImg} alt="Star Wars poster" />
      <div>
      <h2 className={styles.title}>Star Wars movie poster</h2>
        <p className={styles.description}>An epic decorative Star Wars movie poster, with MDF frame and A3 size. A great souvenir of one of the most iconic films of all time. This classic poster will bring adventure, nostalgia, and the magic of Star Wars to anywhere you decide to hang it. Don't miss the chance to add this beautiful memory to your collection!</p>
        <button className={styles.button}>Buy now</button>
      </div>
    </div>
  )
}