export const calculateGravitationalForce = (obj1, obj2) => {
    const G = 0.01
    const dx = obj2.x - obj1.x
    const dy = obj2.y - obj1.y
    const distance = Math.sqrt(dx * dx + dy * dy);

    if(distance === 0) return { x: 0, y: 0 }

    const force = G * (obj1.size * obj2.size) / (distance * distance)

    return {
        x: force * dx / distance,
        y: force * dy / distance
    }
}
