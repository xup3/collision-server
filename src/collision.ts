import Player from "./player"
import Projectile from "./projectile"
export default class Collision {
  collisionDetection(player: Player, projectile: Projectile): boolean {
    if (JSON.stringify(player.currentPosition) === JSON.stringify(projectile.currentPosition)) {
      player.setDamage(projectile.damage)

      return true
    }

    return false
  }
}
