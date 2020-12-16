// ~Factory pattern
class Particle extends Sprite {
    constructor() {
        super(10, 10, 0, 0, "portal")



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
    }

}