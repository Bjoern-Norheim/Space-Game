/*
Particle Manager
Resposibilities:
manage systems
    Turning on or off systems
    sa

Particle System
Resposibilities:
spawning particles
specilizstion for sub-classes
    color(s)
    shape/ amount

Particle -> more things in the constructor so it has position
-> subclass of Sprite
Responsibilities:


1. Something keeps track of when an enemy dies
    Calls something on particle manager
2. Particle manager sees that it needs a system
3. Particle manager creates the specific paritcle system needed


*/

class ParticleManager {
    constructor(gameManager) {

        this.manager = gameManager
        this.exhaust = new ExhaustSystem(100, 100, this);
        this.particleSystems = [this.exhaust];
        this.particles = [];
        this.particleLoop = -1
        // () => {/*code goes here*/}
        //
    }

    example() {
        console.log("Exhaust")
    }

    setParticleLoop(particleType, interval) {
        if (!this.isRunning()) {
            this.particleLoop = setInterval(particleType, interval);
        }
    }

    stopLoop() {
        clearInterval(this.particleLoop);
        this.particleLoop = -1;
    }

    isRunning() {
        return this.particleLoop != -1;
    }

    updateParticleLoop() {
        // Loop through particles updating position
        // Generate position

        this.exhaust.spawnExhaustParticle()

        var cenX = this.manager.player.x + (this.manager.player.width / 2)
        var cenY = this.manager.player.y + (this.manager.player.height / 2)
        var direction = this.manager.player.rotation + 90
        var vecX = Math.cos(radians(direction))
        var vecY = Math.sin(radians(direction))
        var magnitude = this.manager.player.width / 1.5
        vecX *= magnitude
        vecY *= magnitude
        this.exhaust.setPosition(cenX + vecX, cenY + vecY)

        // Delete list for particles past their lifetime
        var deleteList = []
        // Update new and exisitng particles
        for (const particle of this.particles) {
            console.log(typeof (particle))
            particle.update();
            if (particle.lifeTime <= 0) {
                deleteList.push(particle)
            }
        }

        for (const particle of deleteList) {
            this.deleteParticle(particle)
        }


    }

    particleCreator(style) {
        var newParticle = new Particle(style); // this will get fancy later

        // This array simulates
        this.particles.push(newParticle)

        // This array draws
        this.manager.sprites.push(newParticle)

        return newParticle
    }

    deleteParticle(par) {
        par.delete()
        // This removes from particles list
        this.particles.splice(this.particles.indexOf(par), 1)

        // This removes from sprites list
        this.manager.sprites.splice(this.manager.sprites.indexOf(par), 1)
    }

}
