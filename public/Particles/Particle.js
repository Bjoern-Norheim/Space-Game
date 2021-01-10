// ~Factory pattern
class Particle extends Sprite {
    constructor(type) {
        super(10, 10, 0, 0, type)
        this.lifeTime = 0


    }
    setPosition(x, y) {
        this.x = x
        this.y = y
    }

    setSize(width, height) {
        this.width = width
        this.height = height
    }

    setSpeed(speed) {

    }

    update() {
        // Moves particle for animation
        console.log("I am moving!")
        this.lifeTime -= 1
    }

    setLifeTime(time) {
        this.lifeTime = time
        // Countdown -> when 0 or less

    }
}
