class ExhaustSystem extends ParticleSystem {
    constructor(x, y, particleManager) {
        super(x, y)

        this.parManager = particleManager

    }

    spawnExhaustParticle() {
        let newParticle = this.parManager.particleCreator()

        newParticle.setPosition(this.x, this.y)
        newParticle.setSize(10, 10)
        newParticle.setLifeTime(10)
    }
}