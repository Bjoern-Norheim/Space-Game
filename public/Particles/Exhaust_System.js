class ExhaustSystem extends ParticleSystem {
    constructor(x, y, particleManager) {
        super(x, y)

        this.parManager = particleManager

    }

    spawnExhaustParticle() {
        let newParticle = this.parManager.particleCreator()

        newParticle.setPosition(100, 100)
        newParticle.setSize(10, 10)
    }

    updateExhaustLocation(newX, newY) {
        this.x = newX
        this.y = newY
    }
}