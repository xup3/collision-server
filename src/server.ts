import { v4 as uuidv4 } from "uuid";
import Game from "./game";

export default class Server {
  title: string;
  maxPlayers: number;
  startUpTime: number;
  tickrate: number;
  game?: Game;
  uuid = uuidv4();

  constructor(
    title = "Default Server Title",
    maxPlayers = 10,
    startUpTime: number = new Date().getTime(),
    tickrate = 128
  ) {
    this.title = title;
    this.maxPlayers = maxPlayers;
    this.startUpTime = startUpTime;
    this.tickrate = tickrate;

    console.info("SERVER STARTED");
  }

  public attachGame(game: Game) {
    this.game = game;
    console.info("GAME ATTACHED TO SERVER");
  }
}
