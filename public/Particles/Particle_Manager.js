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
4. 
*/

class ParticleManager {
    constructor(gameManager) {

        this.manager = gameManager
        this.exahust = new ExhaustSystem(100, 100);
        this.particleSystems = [this.exhaust];
        this.particles = [];
        this.particleLoop = -1


        this.setParticleLoop(() => {
            // capturing -> captured "this" inside of the lambda
            this.exahust
            this.example()
        }, 100)
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

        // Generate new particles
        this.exahust.exhaustParticleCreator();

        // Update new and exisitng particles
        for (particle in particles) {
            particle.update();

        }
    }
}