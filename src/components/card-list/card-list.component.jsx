import { Card } from "../card/card.component";

import styles from "./card-list.module.css";

export const CardList = ({ monsters }) => {
  return (
    <div className={styles.CardList}>
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
