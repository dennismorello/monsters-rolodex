import { MonsterImage } from "../monster-image/monster-image.component";

import styles from "./card.module.css";

export const Card = ({ monster }) => {
  return (
    <div className={styles.Card}>
      <MonsterImage monster={monster} size={180} />
      <h2>{monster.name}</h2>
      <a href={`mailto:${monster.email}`}>{monster.email}</a>
    </div>
  );
};
