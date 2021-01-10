class ExhaustSystem extends ParticleSystem {
    constructor(x, y, particleManager) {
        super(x, y)

        this.parManager = particleManager

    }

    spawnExhaustParticle() {
        let newParticle = this.parManager.particleCreator("exhaustParticle")

        newParticle.setPosition(this.x + randomInt(1, 25), this.y + randomInt(1, 25))
        newParticle.setSize(10, 10)
        newParticle.setLifeTime(35)

    }
}
