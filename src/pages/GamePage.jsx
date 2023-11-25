import Canvas from '../components/Canvas';
import OrbitalObject from '../game/OrbitalObject';
import { calculateGravitationalForce } from '../game/Helpers';

import '../styles/gamepage.css'

const GamePage = ({ onExit }) => {
    const handleExitClick = () => {
        const confirmExit = window.confirm("Are you sure you want to leave the game?")
        if (confirmExit) 
            onExit()
    }


    const updateObjects = () => {
        for(let i = 0; i < objects.length; i++) {
            for(let j = i + 1; j < objects.length; j++) {
                const force = calculateGravitationalForce(objects[i], objects[j]);
                objects[i].applyForce(force);
                objects[j].applyForce({ x: -force.x, y: -force.y }); // Apply opposite force
            }
        }
    
        objects.forEach(obj => obj.updatePosition());
    };

    const objects = [
            new OrbitalObject(100, 100, 20), 
            new OrbitalObject(300, 200, 30), 
            new OrbitalObject(200, 50, 10, 0.1, 0.3)
    ]

    
    const canvasWidth = window.innerWidth
    const canvasHeight = window.innerHeight
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)
        updateObjects()
        renderObjects(ctx)
    }

    const renderObjects = (ctx) => {
        objects.forEach(object => object.draw(ctx))
    }

    return (
        <div className="game-container">
            <button className="exit-button" onClick={() => handleExitClick()}>X</button>
            <Canvas draw={draw}/>
        </div>    
    )
};

export default GamePage