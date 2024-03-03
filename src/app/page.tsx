import Image from 'next/image';
import styles from './page.module.css';
import HomeGrid from '@/components/HomeGrid';

export default function Home() {
  return (
    <div className={styles.full}>
      <HomeGrid />
    </div>
  );
}
