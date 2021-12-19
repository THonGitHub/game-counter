
const playerOne = {
    id:1,
    name: "Tomas"
}

const playerTwo = {
    id:2,
    name: "Elzicka"
}

export const allPlayers = [playerOne, playerTwo]

const gameTypeScrabble = {
    id: 100,
    name: "Scrabble"
}
const gameTypeCarcassonne = {
    id: 101,
    name: "Carcassonne"
}

export const allGameTypes = [gameTypeScrabble,gameTypeCarcassonne]

const gamePlayerOne = {
    player: playerOne,
    currentGame: [15,0,23, 56],
    totalWins: 0
}

const gamePlayerTwo = {
    player: playerTwo,
    currentGame: [16,1,24, 57],
    totalWins: 35
}

export const gamePlay = {
    gameType: gameTypeScrabble,
    players: [gamePlayerOne, gamePlayerTwo],
    totalGames: 35
}
