class ExhaustSystem extends ParticleSystem {
    constructor(x, y) {
        super(x, y)

        this.particleList = []
    }

    exhaustParticleCreator() {
        console.log("Create particle at " + this.x + ", " + this.y);
        let newParticle = new Particle(); // this will get fancy later

    }

    updateExhaustLocation(newX, newY) {
        this.x = newX
        this.y = newY
    }
}