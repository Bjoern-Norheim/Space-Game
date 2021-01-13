class ExhaustSystem extends ParticleSystem {
    constructor(x, y, particleManager) {
        super(x, y)

        this.parManager = particleManager
        this.lifeTime = 35
    }

    spawnExhaustParticle() {
        let newParticle = this.parManager.particleCreator("exhaustParticle")

        newParticle.setPosition(this.x + randomInt(-15, 15), this.y + randomInt(-15, 15))
        newParticle.setSize(10, 10)
        newParticle.setLifeTime(this.lifeTime)

        //var anon = function (a, b) { return a + b };
        /*
        this.totalLifetime // The total doesnt change
        this.lifeTime // This decreases to 0
        */
        var exhaustDecayFunction = function (lifetime, totalLifetime) {
            var LifetimePerc = lifetime / totalLifetime
            var opac = Math.pow(- (LifetimePerc - 1), 1 / 2)
            return opac
        }

        /*
        (inside particle)
        this.element.style.opacity = exhaustDecayFunction(this.lifeTime, this.totalLifetime)
        */
    }
}
