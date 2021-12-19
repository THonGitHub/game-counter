import type { GamePlayerType } from "../../mock";

type Props = {
  players: GamePlayerType[];
};

export default function TotalResultTable(props: Props) {
  const { players } = props;
  return (
    <table>
      <tr>
        <th>name</th>
        <th>score</th>
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
