import React from "react";
import logo from "../../assets/logo.svg";
import { gamePlay, allGameTypes, allPlayers } from "../../mock";
import styles from "./Header.module.css";
import TotalResultTable from "./TotalResultTable";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <div className={styles.main}>
        <h1>{gamePlay.gameType.name}</h1>
      </div>

      <div>
        <h1 className={styles.title}> Výsledková tabuľka</h1>
        <TotalResultTable players={gamePlay.players} />
      </div>
    </header>
  );
}
