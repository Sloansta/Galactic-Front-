class OrbitalObject {
    constructor(x, y, size, velocityX = 0, velocityY = 0) {
        this.x = x
        this.y = y
        this.size = size
        this.velocity = { x: velocityX, y: velocityY }
        this.gravitationalPull = this.calculateGravitationalPull()
    }

    applyForce(force) {
        this.velocity.x += force.x
        this.velocity.y += force.y
    }

    updatePosition() {
        this.x += this.velocity.x
        this.y += this.velocity.y
    }

    calculateGravitationalPull() {
        return this.size * this.size
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.closePath()
    }
}

export default OrbitalObject