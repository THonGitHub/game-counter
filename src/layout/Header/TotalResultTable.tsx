import type { GamePlayerType } from "../../mock";
import styles from "./Header.module.css";

type Props = {
  players: GamePlayerType[];
};

export default function TotalResultTable(props: Props) {
  const { players } = props;
  return (
    <table className={styles.table}>
      <tr>
        <th>hráč</th>
        <th>skóre</th>
      </tr>
      {players.map((item) => (
        <tr>
          <td>{item.player.name}</td>
          <td>{item.totalWins}</td>
        </tr>
      ))}
    </table>
  );
}
