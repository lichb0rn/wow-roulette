import styles from './page.module.css';
import { Picker } from '@/components/Picker/Picker';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>World of Warcraft Roulette</h1>
      <p className={styles.description}>Random character selection tool</p>
      <p className={styles.help}>Select an item to exclude from selection pool</p>
      <Picker />
    </main>
  );
}
