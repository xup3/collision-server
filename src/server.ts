export default class Server {
  title: string
  maxPlayers: number
  startUpTime: Date
  tickrate: number

  constructor(
    title: string = "Default Server Title",
    maxPlayers: number = 10,
    startUpTime: Date = new Date(),
    tickrate: number = 128) {
    this.title = title
    this.maxPlayers = maxPlayers
    this.startUpTime = startUpTime
    this.tickrate = tickrate
  }
}